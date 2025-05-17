"use client"

import { useState, useEffect } from "react"
import { Command } from "cmdk"
import { CommandIcon } from "lucide-react"

export default function CommandMenu() {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md border border-gray-700 p-2 flex items-center gap-2">
        <CommandIcon className="h-4 w-4" />
        <span className="text-sm">Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-700 bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-background rounded-lg shadow-lg w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="border border-gray-700 rounded-lg">
              <div className="flex items-center border-b border-gray-700 px-3">
                <CommandIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <input
                  className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Type a command or search..."
                />
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Sections">
                  <Command.Item className="px-2 py-1 rounded-md cursor-pointer hover:bg-accent">About Me</Command.Item>
                  <Command.Item className="px-2 py-1 rounded-md cursor-pointer hover:bg-accent">
                    Experience
                  </Command.Item>
                  <Command.Item className="px-2 py-1 rounded-md cursor-pointer hover:bg-accent">Projects</Command.Item>
                  <Command.Item className="px-2 py-1 rounded-md cursor-pointer hover:bg-accent">Contact</Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  )
}
