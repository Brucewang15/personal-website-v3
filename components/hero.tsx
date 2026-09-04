"use client"

import { GradientText } from "./effects/GradientText"
import OrgName from "./effects/org-name"

export default function Hero() {
  return (
    <section className="flex flex-col text-left pt-8 space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">
          <GradientText>Bruce Wang</GradientText>
        </h1>
      </div>

      <p className="text-base text-foreground leading-8">
        I&apos;m currently studying computer science at{" "}
        <OrgName
          src="/waterloo_logo.png"
          alt="UWaterloo"
          name="UWaterloo"
          href="https://uwaterloo.ca"
        />
        .
        <br />
        <br />
        Previously, I was a Member of Technical Staff Intern at{" "}
        <OrgName
          src="/mercor_no_bg.png"
          alt="Mercor"
          name="Mercor"
          href="https://mercor.com"
        />
        , where I worked on post-training evals and infra for frontier labs, including building out RL environments, sandbox
        orchestration, deterministic and agentic verifiers, agent harnesses,
        QC pipelines, and platform engineering.
        <br />
        <br />
        Before that, I was a software engineering intern at{" "}
        <OrgName
          src="/plato_logo.png"
          alt="Plato"
          name="Plato"
          href="https://plato.so"
          logoWrapperClassName=""
        />
        , where I worked on synthetic data generation pipelines for CUA RL
        environments and sandbox tooling.
        <br />
        <br />
        I&apos;m a software engineer who loves digging into distributed
        systems and learning more about the operating system.
      </p>
    </section>
  )
}