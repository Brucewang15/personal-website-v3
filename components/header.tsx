"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import CommandMenu from "./command-menu"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-10 w-full py-4 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-screen-lg mx-auto rounded-lg border border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                Bruce Wang
              </h1>
              <nav className="hidden md:flex space-x-4">
                <a href="/" className="text-zinc-400 hover:text-foreground">
                  Home
                </a>
                <a href="#" className="text-zinc-400 hover:text-foreground">
                  Blog
                </a>
                <a href="#" className="text-zinc-400 hover:text-foreground">
                  Resume
                </a>
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
