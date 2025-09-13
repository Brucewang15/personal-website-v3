'use client'

import Hppn from "@/public/hppn_logo.jpg"
import Plato from "@/public/plato-no-bg.png"
import Mercor from "@/public/mercor.jpeg"
import TID from "@/public/topinfodev.png"
import Waterloo from "@/public/waterloo_logo.png"
import Image, { StaticImageData } from "next/image"
import { GlowingEffect } from "./effects/GlowEffect"
import { GradientText } from "./effects/GradientText"

interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string
  logo: StaticImageData
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: "1",
    role: "Member of Technical Staff Intern",
    company: "Mercor",
    location: "San Francisco, CA",
    period: "Sept 2025 - Dec 2025",
    description:
      "RL environments and infrastructure for AI agents",
    logo: Mercor,
    technologies: ["Python", "Modal", "Docker", "AWS", "React"],
  },
  {
    id: "2",
    role: "Software Engineer Intern",
    company: "Plato Technologies",
    location: "San Francisco, CA",
    period: "May 2025 - Aug 2025",
    description:
      "🤖 Training environments for browser agents",
    logo: Plato,
    technologies: ["Python", "AI Agents", "Docker", "AWS", "React"],
  },
  {
    id: "3",
    role: "Software Engineer Intern",
    company: "Hppn.ing",
    location: "Waterloo, ON",
    period: "Sept 2024 - Jan 2025",
    description:
      "🎉 Event discovery app",
    logo: Hppn,
    technologies: ["React Native", "TypeScript", "FastAPI", "PostgreSQL", "FAISS"],
  },
  {
    id: "4",
    role: "Full-Stack Engineer Intern",
    company: "TopInfoDev Solutions",
    location: "Vancouver, BC",
    period: "May 2024 - Aug 2024",
    description:
      "💻 Full-stack engineering",
    logo: TID,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
  },
  {
    id: "5",
    role: "Computer Science",
    company: "University of Waterloo",
    location: "Waterloo, ON",
    period: "Sept 2024 - Present",
    description:
      "🎓 Currently studying computer science at the University of Waterloo",
    logo: Waterloo,
    technologies: ["Design Recipe", "Gambling", "Sleeping", "Eating"],
  },
]

// Function to get tag color based on technology name
const getTagColor = (tech: string) => {
  const lowerTech = tech.toLowerCase()

  if (
    lowerTech.includes("react") ||
    lowerTech.includes("next") ||
    lowerTech.includes("d3") ||
    lowerTech.includes("ci/cd")
  ) {
    return {
      bg: "bg-blue-100 dark:bg-blue-900/20",
      text: "text-blue-800 dark:text-blue-300",
    }
  } else if (
    lowerTech.includes("node") ||
    lowerTech.includes("tailwind") ||
    lowerTech.includes("machine") ||
    lowerTech.includes("agile")
  ) {
    return {
      bg: "bg-purple-100 dark:bg-purple-900/20",
      text: "text-purple-800 dark:text-purple-300",
    }
  } else if (
    lowerTech.includes("python") ||
    lowerTech.includes("flask") ||
    lowerTech.includes("django") ||
    lowerTech.includes("fastapi")
  ) {
    return {
      bg: "bg-green-100 dark:bg-green-900/20",
      text: "text-green-800 dark:text-green-300",
    }
  } else if (
    lowerTech.includes("aws") ||
    lowerTech.includes("docker") ||
    lowerTech.includes("cloud") ||
    lowerTech.includes("kubernetes") ||
    lowerTech.includes("container")
  ) {
    return {
      bg: "bg-pink-100 dark:bg-pink-900/20",
      text: "text-pink-800 dark:text-pink-300",
    }
  } else if (
    lowerTech.includes("sql") ||
    lowerTech.includes("postgres") ||
    lowerTech.includes("mysql") ||
    lowerTech.includes("database") ||
    lowerTech.includes("mongo")
  ) {
    return {
      bg: "bg-teal-100 dark:bg-teal-900/20",
      text: "text-teal-800 dark:text-teal-300",
    }
  } else if (
    lowerTech.includes("typescript") ||
    lowerTech.includes("javascript") ||
    lowerTech.includes("js") ||
    lowerTech.includes("ts")
  ) {
    return {
      bg: "bg-orange-100 dark:bg-orange-900/20",
      text: "text-orange-800 dark:text-orange-300",
    }
  } else if (
    lowerTech.includes("ai") ||
    lowerTech.includes("agent") ||
    lowerTech.includes("ml") ||
    lowerTech.includes("faiss") ||
    lowerTech.includes("learning")
  ) {
    return {
      bg: "bg-indigo-100 dark:bg-indigo-900/20",
      text: "text-indigo-800 dark:text-indigo-300",
    }
  } else if (
    lowerTech.includes("design") ||
    lowerTech.includes("recipe") ||
    lowerTech.includes("gambling") ||
    lowerTech.includes("sleeping") ||
    lowerTech.includes("eating")
  ) {
    return {
      bg: "bg-amber-100 dark:bg-amber-900/20",
      text: "text-amber-800 dark:text-amber-300",
    }
  } else {
    return {
      bg: "bg-yellow-100 dark:bg-yellow-900/20",
      text: "text-yellow-800 dark:text-yellow-300",
    }
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
        <GradientText>Experience</GradientText>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative rounded-lg p-[1px] transition-all bg-gradient-to-b from-neutral-200 to-neutral-400 dark:from-white/[0.15] dark:to-white/[0.025] shadow-input hover:shadow-xl">
            <div key={exp.id} className="relative rounded-lg bg-card p-6 transition-all">
              {/* Glow Effect */}
              <GlowingEffect
                disabled={false}
                glow={true}
                borderWidth={1}
                blur={0}
                spread={81}
                proximity={120}
                className="z-0"
              />

              <div className="flex flex-col md:flex-row md:gap-6 relative z-5">
                {/* Content for mobile - Logo on right side */}
                <div className="flex md:hidden justify-between items-center mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm font-medium text-foreground text-zinc-700 dark:text-zinc-300">{exp.company}</p>
                  </div>

                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                      {exp.company === "Plato Technologies" ? (
                        <div className="absolute inset-[15%] bg-white rounded-lg z-0"></div>
                      ) : null}
                      <Image
                        src={exp.logo || "/placeholder.svg"}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-fit relative z-5"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="relative h-14 w-14 overflow-hidden rounded-lg">
                    {exp.company === "Plato Technologies" ? (
                      <div className="absolute inset-[15%] bg-white rounded-lg z-0"></div>
                    ) : null}
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-fit relative z-5"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Desktop layout for title/company/date */}
                  <div className="hidden md:flex md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm md:text-base font-medium text-foreground text-zinc-700 dark:text-zinc-300">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm md:text-lg font-medium text-foreground">{exp.period}</p>
                      <p className="text-xs md:text-base font-medium text-foreground text-zinc-700 dark:text-zinc-300">{exp.location}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm md:text-base text-muted-foreground">{exp.description}</p>
                  </div>

                  {/* Technologies used */}
                  {/* <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => {
                      const colorClass = getTagColor(tech)
                      return (
                        <span
                          key={index}
                          className={`inline-flex items-center rounded-full ${colorClass.bg} px-2 py-0.5 text-xs md:text-sm font-medium ${colorClass.text}`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
