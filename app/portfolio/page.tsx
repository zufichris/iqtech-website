import { CaseStudyCard } from "@/components/case-study-card"
import { ProjectFilter } from "@/components/project-filter"
import { caseStudies } from "@/lib/data/portfolio"

export default function PortfolioPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Portfolio
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <ProjectFilter />
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </section>
    </>
  )
}
