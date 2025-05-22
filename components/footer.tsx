"use client"

import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { GradientText } from "./effects/GradientText"

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/brucewang15", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com/in/brucewang15", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "https://www.instagram.com/bruce_w.15/", icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
    { href: "https://x.com/bruce_wang15", icon: <Twitter className="h-5 w-5" />, label: "X (Twitter)" }
  ]

  const navLinks = {
    Landing: [
      { href: "#about", text: "About Me" },
      { href: "#experience", text: "Experience" },
      { href: "#projects", text: "Projects" },
      { href: "#contact", text: "Contact Me" }
    ],
    Pages: [
      { href: "/", text: "Home" },
      { href: "/blog", text: "Blog" },
      { href: "/resume", text: "Resume" }
    ]
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 100;
        const yOffset = -headerHeight - 15;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t py-12 mt-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-3">
            <GradientText className="text-2xl font-bold">
              Bruce Wang
            </GradientText>
            <p className="text-sm text-muted-foreground">b225wang@uwaterloo.ca</p>

            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-24 justify-end md:ml-auto">
            {Object.entries(navLinks).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleSectionClick(e, link.href)}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bruce Wang</p>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <a
              href="https://cs.uwatering.com/https://brucewang15.vercel.app?nav=prev"
              className="text-muted-foreground hover:text-foreground"
            >
              ←
            </a>
            <a href="https://cs.uwatering.com/https://brucewang15.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cs.uwatering.com/icon.black.svg"
                alt="CS Webring"
                className="w-6 h-auto opacity-80 dark:invert"
              />
            </a>
            <a
              href="https://cs.uwatering.com/https://brucewang15.vercel.app?nav=next"
              className="text-muted-foreground hover:text-foreground"
            >
              →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
