"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import { GradientBorder } from "./effects/GradientBorder"
// import { GlowingEffect } from "./ui/glowing-effect"

export interface Project {
    id: string
    name: string
    description: string
    link: string
    image: StaticImageData
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <GradientBorder>
            <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-lg overflow-hidden group "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={project.image || "/placeholder.svg?height=400&width=600"}
                        alt={project.name}
                        fill
                        className={`object-cover object-top transition-transform duration-250 ${isHovered ? "scale-105" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-sm lg:text-base text-gray-200 line-clamp-2">{project.description}</p>
                </div>

                {/* <div className="absolute inset-0 pointer-events-none">
                <GlowingEffect disabled={false} isHovered={isHovered} borderWidth={2} spread={40} variant="default" />
            </div> */}
            </Link>
        </GradientBorder>

    )
}
