"use client";

import { GradientBorder } from "./effects/GradientBorder";
import { GradientText } from "./effects/GradientText";

export default function ContactMe() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }
    console.log(data);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    console.log(resData);
  };

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
                  Submit
                </button>
              </GradientBorder>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
