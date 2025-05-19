import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"
import { GradientText } from "./effects/GradientText"

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-3">
            <GradientText className="text-2xl font-bold">
              Bruce Wang
            </GradientText>
            <p className="text-sm text-muted-foreground">b225wang@uwaterloo.ca</p>

            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com/brucewang15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/brucewang15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/bruce_w.15/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/bruce_wang15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-24 justify-end md:ml-auto">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Landing</h3>
              <ul className="space-y-2">
                <li>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bruce Wang</p>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <a
              href="https://cs.uwatering.com/#your-site-here?nav=prev"
              className="text-muted-foreground hover:text-foreground"
            >
              ←
            </a>
            <a href="https://cs.uwatering.com/#your-site-here" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cs.uwatering.com/icon.black.svg"
                alt="CS Webring"
                className="w-6 h-auto opacity-80 dark:invert"
              />
            </a>
            <a
              href="https://cs.uwatering.com/#your-site-here?nav=next"
              className="text-muted-foreground hover:text-foreground"
            >
              →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
