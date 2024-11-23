"use client";

import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import type { NextPage } from "next";

// Define the validation schema with Zod
const schema = z.object({
  name: z.string().min(1, { message: "A name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(12, { message: "Message is too short" }),
});

// Define the form fields type based on the schema
type FormFields = z.infer<typeof schema>;

const ContactUsForm: NextPage = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [token, setToken] = useState<string | null>(null); // Token state to track ReCAPTCHA validation
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  // Handle ReCAPTCHA change event
  const handleCaptchaChange = (newToken: string | null) => {
    if (newToken) {
      setToken(newToken); // Save the token
      setIsVerified(true); // Mark as verified
    } else {
      setToken(null);
      setIsVerified(false);
    }
  };

  const handleCaptchaExpired = () => {
    recaptchaRef.current?.reset(); // Reset the ReCAPTCHA widget
    setToken(null); // Clear the token
    setIsVerified(false); // Mark as unverified
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (!token) {
      setError("root", { message: "Captcha validation failed" });
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, token }), // Include the token in the request
      });

      if (!response.ok) {
        throw new Error("Failed to send the email");
      }

      // Reset the form on success
      reset();
    } catch (error) {
      setError("root", {
        message: error.message || "Failed to send, Please try again",
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-max px-4 md:px-0 md:w-full flex-col md:pr-10 lg:pr-20 md:max-w-full'
      >
        <input
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-3 h-14 block w-full outline-none focus:border-stone-500 pl-2'
          type='text'
          placeholder='Name'
          {...register("name")}
        />
        {errors.name && (
          <div className='text-red-500'>{errors.name.message}</div>
        )}

        <input
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-3 h-14 block w-full outline-none focus:border-stone-500 pl-2'
          type='email'
          placeholder='Email'
          {...register("email")}
        />
        {errors.email && (
          <div className='text-red-500'>{errors.email.message}</div>
        )}

        <textarea
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-5 block w-full outline-none focus:border-stone-500 pl-2'
          placeholder='Message Me'
          rows={6}
          {...register("message")}
        />
        {errors.message && (
          <div className='text-red-500'>{errors.message.message}</div>
        )}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          ref={recaptchaRef}
          onChange={handleCaptchaChange} // Triggered when user completes the ReCAPTCHA
          onExpired={handleCaptchaExpired} // Triggered when the ReCAPTCHA token expires
        />

        <button
          disabled={!isVerified || isSubmitting}
          type='submit'
          className='ease-out duration-300 bg-slate-600 hover:bg-[#FF6500] px-6 py-3 disabled:bg-gray-500 rounded-md text-white mt-4 font-bold'
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>

        {errors.root && (
          <div className='text-red-500'>{errors.root.message}</div>
        )}

        {isSubmitSuccessful && (
          <div className='transition-all text-green-500 pt-4'>
            Your message was successfully submitted! Thank you!
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactUsForm;
