"use client"

import { GradientText } from "./effects/GradientText"
import OrgName from "./effects/org-name"

export default function Hero() {
  return (
    <section className="flex flex-col text-left pt-2 space-y-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          <GradientText>Bruce Wang</GradientText>
        </h1>
      </div>

      <p className="text-xs md:text-base text-foreground leading-9">
        I&apos;m a software engineer who loves digging into distributed systems and learning more about the operating system.
        <br />
        I&apos;m currently studying computer science at{" "}
        <OrgName
          src="/waterloo_logo.png"
          alt="UWaterloo"
          name="UWaterloo"
          href="https://uwaterloo.ca"
        />{" "}
        and previously a Member of Technical Staff Intern at{" "}
        <OrgName
          src="/mercor_no_bg.png"
          alt="Mercor"
          name="Mercor"
          href="https://mercor.com"
        />{" "}
        where I worked on post-training evals and infra for frontier labs.
        <br />
        <br />
        Before that, I was at{" "}
        <OrgName
          src="/plato_logo.png"
          alt="Plato"
          name="Plato"
          href="https://plato.so"
          logoWrapperClassName=""
        />{" "}
        where I worked on synthetic data pipelines and sandboxes.
      </p>
    </section>
  )
}
