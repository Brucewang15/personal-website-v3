"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import HoverUnderline from "./HoverUnderline"

interface OrgNameProps {
  src: string
  alt: string
  name: string
  href: string
  logoWrapperClassName?: string
}

export default function OrgName({
  src,
  alt,
  name,
  href,
  logoWrapperClassName,
}: OrgNameProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-bold align-middle cursor-pointer text-black dark:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center",
          logoWrapperClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={14}
          height={14}
          className="object-contain"
        />
      </span>
      <HoverUnderline hovered={hovered}>{name}</HoverUnderline>
    </Link>
  )
}