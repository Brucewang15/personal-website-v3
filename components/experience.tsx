import Image, { StaticImageData } from "next/image"
import { GradientText } from "./effects/GradientText"
import Plato from "@/public/plato-no-bg.png"
import Hppn from "@/public/hppn_logo.jpg"
import TID from "@/public/topinfodev.png"
import Waterloo from "@/public/waterloo_logo.png"

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
    role: "Software Engineer Intern",
    company: "Plato Technologies",
    location: "San Francisco, CA",
    period: "May 2025 - Aug 2025",
    description:
      "Training environments for browser agents",
    logo: Plato,
    technologies: ["Node.js", "React", "TypeScript"],
  },
  {
    id: "2",
    role: "Software Engineer Intern",
    company: "Hppn.ing",
    location: "Waterloo, ON",
    period: "Sept 2024 - Jan 2025",
    description:
      "Event discovery app",
    logo: Hppn,
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "3",
    role: "Full-Stack Engineer Intern",
    company: "TopInfoDev Solutions",
    location: "Vancouver, BC",
    period: "May 2024 - Aug 2024",
    description:
      "Full-stack engineering",
    logo: TID,
    technologies: ["JavaScript", "CI/CD", "Agile"],
  },
  {
    id: "4",
    role: "Computer Science",
    company: "University of Waterloo",
    location: "Waterloo, ON",
    period: "Sep 2024 - Present",
    description:
      "Currently studying computer science at the University of Waterloo",
    logo: Waterloo,
    technologies: ["Machine Learning", "D3.js", "Research"],
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
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        <GradientText>Experience</GradientText> 
      </h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-lg font-medium text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-lg font-medium text-foreground">{exp.period}</p>
                    <p className="text-lg font-medium text-foreground">{exp.location}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>

                {/* Technologies used */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => {
                    const colorClass = getTagColor(tech)
                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center rounded-full ${colorClass.bg} px-2.5 py-0.5 text-xs font-medium ${colorClass.text}`}
                      >
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
