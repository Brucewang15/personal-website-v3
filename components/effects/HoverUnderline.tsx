"use client"

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface HoverUnderlineProps {
  children: ReactNode
  className?: string
  hovered?: boolean
}

export default function HoverUnderline({
  children,
  className,
  hovered: controlledHovered,
}: HoverUnderlineProps) {
  const [internalHovered, setInternalHovered] = useState(false)
  const isControlled = controlledHovered !== undefined
  const hovered = isControlled ? controlledHovered : internalHovered

  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={!isControlled ? () => setInternalHovered(true) : undefined}
      onMouseLeave={!isControlled ? () => setInternalHovered(false) : undefined}
    >
      {children}
      <span
        className="absolute left-0 right-0 bottom-[3px] h-px bg-neutral-400 dark:bg-neutral-500"
        aria-hidden="true"
      />
      <motion.span
        className="absolute left-0 right-0 bottom-[3px] h-px bg-black dark:bg-white"
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ transformOrigin: hovered ? "left center" : "right center" }}
        aria-hidden="true"
      />
    </span>
  )
}