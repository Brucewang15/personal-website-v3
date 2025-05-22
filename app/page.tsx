"use client";

import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="space-y-12 mt-24">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}
