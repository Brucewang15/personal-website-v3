import AboutMe from "@/components/about-me"
import ContactMe from "@/components/contact-me"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="space-y-16">
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}
