import { GradientText } from "./effects/GradientText";

export default function ContactMe() {
  return (
    <section id="contact" className="py-8">
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
            <form className="space-y-4">
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

              <button
                type="submit"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
