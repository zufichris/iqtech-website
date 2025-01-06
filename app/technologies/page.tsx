import { TechnologyCard } from "@/components/technology-card"
import { technologies } from "@/lib/data/technologies"
import React from "react"

export default function TechnologiesPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Technology Stack
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.title} {...technology} />
          ))}
        </div>
      </section>
    </>
  )
}
