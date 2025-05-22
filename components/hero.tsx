"use client"

import { ChevronRight, MailIcon } from "lucide-react"
import Link from "next/link"
import { GradientBorder } from "./effects/GradientBorder"
import { GradientText } from "./effects/GradientText"

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-start text-center px-4 pt-8">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-semibold mb-2 md:mb-4">
                    I'm Bruce Wang
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    And I'm a <GradientText>Software Engineer</GradientText>
                </h2>

                <p className="text-sm md:text-lg max-w-2xl mx-auto">
                    Hi! I'm Bruce Wang, a Computer Science student at UWaterloo and software engineer at Plato.
                    Feel free to explore my website!
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {/* Gradient border button */}
                    <GradientBorder className="">
                        <div className="flex flex-row items-center px-4">
                            <Link
                                href="#contact"
                                className="relative py-2 font-semibold rounded-md flex"
                            >
                                <span className="relative">Contact</span>
                            </Link>
                            <MailIcon className="ml-2 h-5 w-5" />
                        </div>
                    </GradientBorder>

                    {/* Solid fill button with opposite style */}
                    <Link
                        href="/resume"
                        className="flex flex-row items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        <div className="">
                            Resume
                        </div>
                        <ChevronRight className="pl-1 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
