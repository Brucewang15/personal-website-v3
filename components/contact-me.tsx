"use client";

import { GradientBorder } from "./effects/GradientBorder";
import { GradientText } from "./effects/GradientText";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Notification = dynamic(() => import("./effects/Notification"), { ssr: false });
export default function ContactMe() {

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "info" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (isSubmitted) {
      setStatus("info");
      return;
    }

    setIsLoading(true);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="py-8 ">
      <div className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold mb-4">
              <GradientText>Let&apos;s get in touch</GradientText>
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Have a question, new opportunity, or just want to have a quick chat? Feel free to send me a message.
            </p>
          </div>

          {/* Right side */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <GradientBorder className="">
                <button
                  type="submit"
                  className="flex justify-center items-center relative px-6 py-3 font-semibold overflow-hidden"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    "Sent!"
                  ) : (
                    "Submit"
                  )}
                </button>
              </GradientBorder>

              {status && <Notification
                type={status}
                text={status === "success"
                  ? "Message sent successfully! I'll get back to you soon."
                  : status === "info"
                    ? "Please wait while I process your message..."
                    : "Failed to send message. Please try again later."}
              />}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
