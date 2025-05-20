"use client";

import ContactMe from "@/components/contact-me";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Hero from "@/components/hero";
const AboutMe = dynamic(() => import("@/components/about-me"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

const Loading = () => <div className="h-24 flex items-center justify-center">Loading...</div>;

export default function Home() {
  return (
    <div className="space-y-12 mt-24">
      <Hero />

      <Suspense fallback={<Loading />}>
        <AboutMe />
      </Suspense>

      <Experience />

      <Projects />

      <ContactMe />

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  )
}
