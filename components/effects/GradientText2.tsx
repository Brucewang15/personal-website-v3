"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GradientText2Props {
    children: ReactNode
    className?: string
}

export function GradientText2({ children, className }: GradientText2Props) {
    return (
        <span
            className={cn(
                "bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text",
                className
            )}
        >
            {children}
        </span>
    )
}
