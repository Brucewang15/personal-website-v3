"use client"

import Link from "next/link"

export default function Footer() {
  const links = [
    { label: "email", href: "mailto:b225wang@uwaterloo.ca", external: true },
    { label: "linkedin", href: "https://linkedin.com/in/brucewang15", external: true },
    { label: "github", href: "https://github.com/brucewang15", external: true },
    { label: "twitter", href: "https://x.com/bruce_wang15", external: true },
    { label: "resume", href: "/resume", external: false },
  ]

  return (
    <footer className="py-6 text-foreground">
      <div className="flex flex-col footer-wide:flex-row footer-wide:items-center footer-wide:justify-between gap-y-3 gap-x-3 text-base text-foreground w-full">
        <div className="flex flex-wrap items-center justify-center footer-wide:justify-start gap-x-3 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent grayscale transition-all duration-200 hover:grayscale-0">
                [ {link.label} ]
              </span>
            </Link>
          ))}
        </div>
        <span className="flex items-center justify-center footer-wide:justify-start gap-1">
          <a
            href="https://cs.uwatering.com/#https://brucewang15.vercel.app?nav=prev"
          >
            <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent grayscale transition-all duration-200 hover:grayscale-0">
              ←
            </span>
          </a>
          <a
            href="https://cs.uwatering.com/#https://brucewang15.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              className="w-6 h-auto opacity-80 dark:invert"
            />
          </a>
          <a
            href="https://cs.uwatering.com/#https://brucewang15.vercel.app?nav=next"
          >
            <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent grayscale transition-all duration-200 hover:grayscale-0">
              →
            </span>
          </a>
        </span>
      </div>
    </footer>
  )
}