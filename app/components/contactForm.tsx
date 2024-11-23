"use client";

import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(1, { message: "A name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(12, { message: "Message is too short" }),
});

// FormFields type based on the schema
type FormFields = z.infer<typeof schema>;

const ContactUsForm: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null); // Captcha token state

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  // Handle reCAPTCHA token generation
  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token); // Save the generated token
  };

  // Handle reCAPTCHA expiration
  const handleCaptchaExpired = () => {
    setCaptchaToken(null); // Clear the token when expired
    recaptchaRef.current?.reset(); // Reset the reCAPTCHA widget
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (!captchaToken) {
      setError("root", { message: "Captcha validation is required" });
      return;
    }

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, token: captchaToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to send the email");
      }

      reset(); // Clear form fields after successful submission
    } catch (error) {
      setError("root", {
        message: error.message || "Failed to send, Please try again",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-4 w-full max-w-lg mx-auto'
      >
        <input
          type='text'
          placeholder='Name'
          {...register("name")}
          className='border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500'
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <input
          type='email'
          placeholder='Email'
          {...register("email")}
          className='border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500'
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        <textarea
          placeholder='Message'
          rows={4}
          {...register("message")}
          className='border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-orange-500'
        />
        {errors.message && (
          <p className='text-red-500'>{errors.message.message}</p>
        )}

        {/* Visible reCAPTCHA */}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          ref={recaptchaRef}
          onChange={handleCaptchaChange}
          onExpired={handleCaptchaExpired}
        />

        <button
          type='submit'
          disabled={!captchaToken || isSubmitting}
          className='bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-600 disabled:bg-gray-400'
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {errors.root && (
          <p className='text-red-500 mt-2'>{errors.root.message}</p>
        )}

        {isSubmitSuccessful && (
          <p className='text-green-500 mt-2'>
            Your message has been successfully submitted!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUsForm;
