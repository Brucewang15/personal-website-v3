"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LocationBox from "@/components/location-box";
import PageSections from "@/components/page-sections";
import Recently from "@/components/recently";

export default function Home() {
  return (
    <PageSections>
      <Hero />
      <Recently />
      <LocationBox />
      <Footer />
    </PageSections>
  )
}
