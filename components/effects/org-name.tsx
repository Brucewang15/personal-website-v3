"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

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
      <span className="relative inline-block">
        {name}
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
    </Link>
  )
}
