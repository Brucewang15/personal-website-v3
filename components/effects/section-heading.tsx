"use client"

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"
import { GradientText2 } from "./GradientText2"

interface SectionHeadingProps {
  title: string
  children: ReactNode
  variant?: "default" | "recently"
}

export default function SectionHeading({
  title,
  children,
  variant = "default",
}: SectionHeadingProps) {
  const [hovered, setHovered] = useState(false)
  const isRecently = variant === "recently"

  return (
    <div
      className={cn("flex gap-3", isRecently && "cursor-default")}
      onMouseEnter={() => isRecently && setHovered(true)}
      onMouseLeave={() => isRecently && setHovered(false)}
    >
      <motion.span
        className={cn(
          "mt-2 h-2 w-2 shrink-0",
          isRecently
            ? "bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500"
            : "bg-foreground rotate-45",
        )}
        aria-hidden="true"
        animate={{ rotate: isRecently ? (hovered ? 0 : 45) : 45 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      <motion.div
        className={cn(
          "min-w-0 flex-1 space-y-3",
          isRecently && "text-black dark:text-white",
        )}
        animate={{ x: isRecently && hovered ? 5 : 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <h2
          className={cn(
            "text-xl font-medium",
            isRecently && "text-black dark:text-white",
          )}
        >
          <GradientText2>{title}</GradientText2>
        </h2>
        {children}
      </motion.div>
    </div>
  )
}