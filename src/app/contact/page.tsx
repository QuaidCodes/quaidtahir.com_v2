"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { z } from "zod";

import SocialWheel from "@/components/SocialWheel";
import QR_LinkedIn from "@/assets/LinkedInQRCode.png";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required!").max(20),
  lastName: z.string().min(1, "Last name is required!").max(20),
  email: z.string().email("Invalid email address!"),
  subject: z.string().min(1, "Subject is required!"),
  message: z.string().min(1, "Message is required!"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status === "error") {
      const timeout = setTimeout(() => setErrors({}), 3000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 sm:order-1 order-2">
          <h1 className="text-4xl font-bold leading-tight">Let’s Connect</h1>
          <p className="text-lg text-gray-300">
            I’m Quaid Tahir, a full-stack developer focused on performance,
            usability, and clean, scalable codebases.
          </p>
          <p className="text-lg text-gray-300">
            Whether you’re looking to collaborate, hire, or just want to chat —
            feel free to send me a message. I’ll get back to you as soon as I
            can.
          </p>
          <div className="pt-4 text-base space-y-1">
            <p>
              <strong>Email:</strong> quaidtahir@quaidtahir.com
            </p>
            <p>
              <strong>Availability:</strong> Currently unavailable until <b>June 2026</b>.
            </p>
          </div>

          <SocialWheel />

          <Image src={QR_LinkedIn} alt="" className="rounded h-30 w-30" />
        </div>

        <div className="bg-[#f5f5f5] text-black dark:bg-white dark:text-black shadow-2xl rounded-2xl p-8 space-y-6 border dark:border-zinc-300 sm:order-2 order-1">
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
            autoComplete="off"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {["firstName", "lastName", "email", "subject"].map((field) => {
                const label = field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase());
                const error = errors[field as keyof ContactFormData];
                return (
                  <div key={field} className="relative mb-6">
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field as keyof ContactFormData]}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full rounded-md border-2 px-3 pt-6 pb-2 bg-transparent focus:outline-none focus:ring-2 transition-all
                        ${
                          error
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-black focus:ring-black"
                        }`}
                      aria-invalid={!!error}
                    />
                    <label
                      htmlFor={field}
                      className={`absolute left-3 top-1 text-sm text-gray-500 transition-all
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                        peer-focus:top-1 peer-focus:text-sm peer-focus:text-black
                        ${error ? "text-red-500 peer-focus:text-red-500" : ""}
                      `}
                    >
                      {label}
                    </label>
                    {error && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {error}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative mb-6">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className={`peer w-full rounded-md border-2 px-3 pt-6 pb-2 bg-transparent focus:outline-none focus:ring-2 transition-all
                  ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-black focus:ring-black"
                  }`}
              />
              <label
                htmlFor="message"
                className={`absolute left-3 top-1 text-sm text-gray-500 transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-1 peer-focus:text-sm peer-focus:text-black
                  ${
                    errors.message ? "text-red-500 peer-focus:text-red-500" : ""
                  }
                `}
              >
                Message
              </label>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 rounded-md font-semibold bg-black text-white hover:bg-gray-900 transition duration-300 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="black"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="black"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center font-medium">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === "error" && Object.keys(errors).length === 0 && (
              <p className="text-red-600 text-center font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
