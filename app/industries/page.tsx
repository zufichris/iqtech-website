import { IndustryCard } from "@/components/industry-card"
import { industries } from "@/lib/data/industries"



export default function IndustriesPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We deliver innovative solutions across diverse industries, helping businesses transform and succeed in the digital age.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} icon={industry.icon as React.ReactNode} />
          ))}
        </div>
      </section>
    </>
  )
}


