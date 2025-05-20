"use client"

import { CommandIcon } from "lucide-react"
import { useState } from "react"
import CommandPalette, { filterItems, getItemIndex, useHandleOpenCommandPalette } from "react-cmdk"
import "react-cmdk/dist/cmdk.css"

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState("root")


  useHandleOpenCommandPalette(setOpen)

  const filteredItems = filterItems(
    [
      {
        heading: "Navigation",
        id: "navigation",
        items: [
          {
            id: "about",
            children: "About Me",
            icon: "UserIcon",
            onClick: () => {
              window.location.href = "#about"
              setOpen(false)
            }
          },
          {
            id: "experience",
            children: "Experience",
            icon: "BriefcaseIcon",
            onClick: () => {
              window.location.href = "#experience"
              setOpen(false)
            }
          },
          {
            id: "projects",
            children: "Projects",
            icon: "CodeBracketIcon",
            onClick: () => {
              window.location.href = "#projects"
              setOpen(false)
            }
          },
          {
            id: "contact",
            children: "Contact",
            icon: "EnvelopeIcon",
            onClick: () => {
              window.location.href = "#contact"
              setOpen(false)
            }
          }
        ]
      }
    ],
    search
  )

  return (
    <>
      <button onClick={() => setOpen(true)} className="rounded-md border border-gray-700 p-2 flex items-center gap-2">
        <CommandIcon className="h-4 w-4" />
        <span className="text-sm">Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-700 bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandPalette
        isOpen={open}
        onChangeOpen={setOpen}
        search={search}
        onChangeSearch={setSearch}
        page={page}
        placeholder="Type a command or search..."
      >
        <CommandPalette.Page id="root">
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>
      </CommandPalette>
    </>
  )
}
