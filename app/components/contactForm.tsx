"use client";

import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(1, { message: "A name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(12, { message: "Message is too short" }),
});

// FormFields type based on the schema
type FormFields = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  // reCAPTCHA v3 runs invisibly; we request a token on submit.
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = useCallback(
    async (data) => {
      if (!executeRecaptcha) {
        setError("root", {
          message: "reCAPTCHA is still loading, please try again in a moment.",
        });
        return;
      }

      try {
        // Generate a fresh v3 token for this submission.
        const token = await executeRecaptcha("contact_form");

        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...data, token }),
        });

        if (!response.ok) {
          throw new Error("Failed to send the email");
        }

        reset(); // Clear form fields after successful submission
      } catch (error) {
        setError("root", {
          message:
            error instanceof Error
              ? error.message
              : "Failed to send, Please try again",
        });
      }
    },
    [executeRecaptcha, reset, setError]
  );

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-max px-4 md:px-0 md:w-full flex-col md:pr-10 lg:pr-20 md:max-w-full'
      >
        <input
          type='text'
          placeholder='Name'
          {...register("name")}
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-3 h-14 block w-full outline-none focus:border-stone-500 pl-2'
        />
        {errors.name && (
          <div className='text-red-500'>{errors.name.message}</div>
        )}

        <input
          type='email'
          placeholder='Email'
          {...register("email")}
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-3 h-14 block w-full outline-none focus:border-stone-500 pl-2'
        />
        {errors.email && (
          <div className='text-red-500'>{errors.email.message}</div>
        )}

        <textarea
          placeholder='Message Me'
          rows={6}
          {...register("message")}
          className='bg-[rgba(0,0,0,0)] border-b-2 border-slate-200 mt-4 mb-5 block w-full outline-none focus:border-stone-500 pl-2'
        />
        {errors.message && (
          <div className='text-red-500'>{errors.message.message}</div>
        )}

        <button
          type='submit'
          disabled={isSubmitting}
          className='ease-out duration-300 bg-slate-600 hover:bg-[var(--accent)] hover:text-black px-6 py-3 disabled:bg-gray-500 rounded-md text-white mt-4 font-bold'
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

const ContactUsForm: React.FC = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
};

export default ContactUsForm;
