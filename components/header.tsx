"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import CommandMenu from "./command-menu"
import { GradientText } from "./effects/GradientText"

export default function Header() {
  const { theme, setTheme } = useTheme()

  // Navigation links defined in a single array
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" }
  ]

  return (
    <header className="fixed top-0 z-10 w-full mt-6 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-lg mx-auto rounded-lg border border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold">
                <GradientText>Bruce Wang</GradientText>
              </h1>
              <nav className="hidden md:flex space-x-4">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="text-zinc-400 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <CommandMenu />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-md border border-gray-700 p-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
