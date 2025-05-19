import { CodeIcon, UserIcon } from "lucide-react";
import { FaHeartbeat, FaLink, FaMusic, FaSkiing, FaTable } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiLinux,
  SiMysql,
  SiNextdotjs, SiNodedotjs,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVim,
  SiX,
  SiYoutube
} from "react-icons/si";
import { BentoGrid, BentoGridItem } from "./effects/BentoGrid";
import { GradientText } from "./effects/GradientText";
import { InfiniteMovingCards } from "./effects/InfiniteCards";

export default function AboutMe() {
  // Define skills for the infinite cards
  const topSkills = [
    { name: "TypeScript", icon: <SiTypescript className="h-10 w-10" /> },
    { name: "JavaScript", icon: <SiJavascript className="h-10 w-10" /> },
    { name: "React", icon: <SiReact className="h-10 w-10" /> },
    { name: "Next.js", icon: <SiNextdotjs className="h-10 w-10" /> },
    { name: "Python", icon: <SiPython className="h-10 w-10" /> },
    { name: "Node.js", icon: <SiNodedotjs className="h-10 w-10" /> },
    { name: "C++", icon: <SiCplusplus className="h-10 w-10" /> },
    { name: "Vercel", icon: <SiVercel className="h-10 w-10" /> },
    { name: "Redux", icon: <SiRedux className="h-10 w-10" /> },
    { name: "PyTorch", icon: <SiPytorch className="h-10 w-10" /> },
    { name: "Git", icon: <SiGit className="h-10 w-10" /> },
    { name: "HTML", icon: <SiHtml5 className="h-10 w-10" /> },
    { name: "CSS", icon: <SiCss3 className="h-10 w-10" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="h-10 w-10" /> },
  ]

  const bottomSkills = [
    { name: "PostgreSQL", icon: <SiPostgresql className="h-10 w-10" /> },
    { name: "AWS", icon: <SiAmazonwebservices className="h-10 w-10" /> },
    { name: "Docker", icon: <SiDocker className="h-10 w-10" /> },
    { name: "Express", icon: <SiExpress className="h-10 w-10" /> },
    { name: "FastAPI", icon: <SiFastapi className="h-10 w-10" /> },
    { name: "Django", icon: <SiDjango className="h-10 w-10" /> },
    { name: "MySQL", icon: <SiMysql className="h-10 w-10" /> },
    { name: "Supabase", icon: <SiSupabase className="h-10 w-10" /> },
    { name: "Vim", icon: <SiVim className="h-10 w-10" /> },
    { name: "Pandas", icon: <SiPandas className="h-10 w-10" /> },
    { name: "Linux", icon: <SiLinux className="h-10 w-10" /> },
    { name: "Redis", icon: <SiRedis className="h-10 w-10" /> },
    { name: "Postman", icon: <SiPostman className="h-10 w-10" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="h-10 w-10" /> },
  ]

  const socials = [
    {
      name: "GitHub",
      icon: <SiGithub className="h-4 w-4" />,
      url: "https://github.com/yourusername"
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-4 w-4" />,
      url: "https://linkedin.com/in/yourusername"
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="h-4 w-4" />,
      url: "https://instagram.com/yourusername"
    },
    {
      name: "Twitter",
      icon: <SiX className="h-4 w-4" />,
      url: "https://twitter.com/yourusername"
    },
    {
      name: "YouTube",
      icon: <SiYoutube className="h-4 w-4" />,
      url: "https://youtube.com/@yourusername"
    },
  ]

  const hobbies = [
    {
      name: "Skiing",
      icon: <FaSkiing className="h-4 w-4" />,
    },
    {
      name: "Badminton",
      icon: <GiJumpingDog className="h-4 w-4" />,
    },
    {
      name: "Piano",
      icon: <FaMusic className="h-4 w-4" />,
    },
    {
      name: "Ping Pong",
      icon: <FaTable className="h-4 w-4" />,
    },
  ]

  return (
    <section id="about" className="py-8">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
        <GradientText>About Me</GradientText>
      </h2>

      <BentoGrid className="grid-cols-1 md:grid-cols-6 gap-4">
        {/* Top row: Equal-sized items (3:3) */}
        <BentoGridItem
          className="col-span-1 md:col-span-3"
          title="Who I Am"
          description="I'm a software engineer and computer science student with a passion for building intuitive, user-friendly applications. Currently studying at the University of Waterloo, I combine academic learning with real-world experience to create innovative solutions."
          icon={<UserIcon className="h-6 w-6 text-blue-500" />}
        />

        <BentoGridItem
          className="col-span-1 md:col-span-3"
          title="Connect With Me"
          description={
            <div className="flex flex-col justify-between h-full gap-4 mt-6 ml-2 text-zinc-600 dark:text-zinc-400">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {social.icon}
                  <span className="text-base ml-1">{social.name}</span>
                </a>
              ))}
            </div>
          }
          icon={<FaLink className="h-4 w-4" />}
        />

        {/* Bottom row: 2:4 ratio */}
        <BentoGridItem
          className="col-span-1 md:col-span-2"
          height="md:h-[15rem]"
          title="Interests & Hobbies"
          description={
            <div className="flex flex-col justify-between h-full gap-4 mt-5 ml-2 text-zinc-600 dark:text-zinc-400">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="flex items-center gap-2"
                >
                  {hobby.icon}
                  <span className="text-base ml-1">{hobby.name}</span>
                </div>
              ))}
            </div>
          }
          icon={<FaHeartbeat className="h-4 w-4" />}
        />

        <BentoGridItem
          className="col-span-1 md:col-span-4"
          height="md:h-[15rem]"
          title="Skills"
          icon={<CodeIcon className="h-5 w-5" />}
          description={
            <div className="flex flex-col gap-4 mt-6">
              <InfiniteMovingCards items={topSkills} direction="left" speed="slow" />
              <InfiniteMovingCards items={bottomSkills} direction="right" speed="slow" />
            </div>
          }
        />
      </BentoGrid>
    </section>
  )
}
