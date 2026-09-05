"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { GradientText2 } from "./effects/GradientText2"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="fixed top-0 z-10 w-full mt-6 backdrop-blur-sm text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-[600px] mx-auto rounded-lg border bg-white/60 dark:bg-black/60 border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <nav className="flex space-x-4 sm:space-x-6">
              {navigationLinks.map((link) => (
                <Link key={link.path} href={link.path} className="text-base group">
                  {isActive(link.path) ? (
                    <GradientText2 bold variant="sunset">{link.name}</GradientText2>
                  ) : (
                    <span className="text-foreground transition-colors duration-200 group-hover:text-amber-500">
                      {link.name}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-md border border-gray-700 p-2 text-foreground"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}