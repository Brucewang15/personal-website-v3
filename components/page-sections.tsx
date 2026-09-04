import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageSectionsProps {
  children: ReactNode
  className?: string
}

/** Uniform vertical spacing between page sections (matches former location → footer gap). */
export default function PageSections({ children, className }: PageSectionsProps) {
  return (
    <div className={cn("mt-20 flex flex-col gap-16", className)}>
      {children}
    </div>
  )
}
