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
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-base text-foreground w-full">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hover:opacity-80 transition-opacity"
            >
              [ {link.label} ]
            </Link>
          ))}
        </div>
        <span className="flex items-center gap-1">
          <a
            href="https://cs.uwatering.com/#https://brucewang15.vercel.app?nav=prev"
            className="hover:opacity-80"
          >
            ←
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
            className="hover:opacity-80"
          >
            →
          </a>
        </span>
      </div>
    </footer>
  )
}
