'use client'
import { GradientText } from "./effects/GradientText"
import ProjectCard from "./ProjectsCard"
import Watclub from "@/public/watclub.png"
import Tune2Keys from "@/public/Tune2keys.png"
import SoccerMetrics from "@/public/soccermetric.png"
import TheraAI from "@/public/theraAI.png"
import Pianofi from "@/public/pianofi.png"
export default function Projects() {


  const projects = [
    {
      "id": "1",
      "name": "Pianofi - WAT.AI",
      "description": "AI powered piano transcription",
      "link": "https://github.com/jogong2718/pianofi",
      "image": Pianofi
    },
    {
      "id": "2",
      "name": "WatClub - UWCSC",
      "description": "Club review website for UWaterloo students",
      "link": "https://github.com/brucewang15/watclub",
      "image": Watclub
    },
    {
      "id": "3",
      "name": "Tune2Keys - HackWestern",
      "description": "Audio to sheet music ML model",
      "link": "https://github.com/jglu/tune2key",
      "image": Tune2Keys
    },
    {
      "id": "4",
      "name": "SoccerMetrics - GeeseHacks",
      "description": "Soccer analytics and feedback app",
      "link": "https://github.com/gordonzhang1/SoccerMetrics",
      "image": SoccerMetrics
    },
    {
      "id": "5",
      "name": "TheraAI - UoftHacks",
      "description": "AI-powered therapy app",
      "link": "https://talktuahtherapist.co/",
      "image": TheraAI
    }
  ]
  return (
    <section id="projects" className="mt-8">
      <div className="space-y-6 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-left">
          <GradientText>Projects</GradientText>
        </h2>
        <p className="text-base text-foreground">Some things I&apos;ve built</p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}