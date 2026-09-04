"use client"

import SectionHeading from "./effects/section-heading"

const recentlyItems = [
  "Playing table tennis",
  "Learning more about systems and distributed systems architecture",
  "Diving into sandboxes",
]

export default function Recently() {
  return (
    <section id="recently">
      <SectionHeading title="Recently" variant="recently">
        <ul className="space-y-2.5 text-xs md:text-base text-black dark:text-white">
          {recentlyItems.map((item) => (
            <li key={item} className="flex items-center gap-2.5 leading-relaxed">
              <span
                className="shrink-0 inline-block w-3 h-px bg-black/50 dark:bg-white/50 select-none"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </SectionHeading>
    </section>
  )
}
