import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { MotionDiv, fadeInUp, fadeInLeft, fadeInRight } from "@/components/ui/motion"
import { ArrowRight, Users, Target, Heart, Lightbulb, Rocket, Trophy } from 'lucide-react'
import { cn } from "@/lib/utils"

export const metadata = {
  title: "About Us",
  description: "Learn about iQtech's mission, values, and the team driving innovation in software development.",
}

export default function AboutPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Driving Digital Innovation
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We're a team of passionate technologists committed to transforming businesses through innovative software solutions.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="grid gap-12 lg:gap-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2020, iQtech emerged from a vision to bridge the gap between complex business challenges and cutting-edge technology solutions. What started as a small team of dedicated developers has grown into a full-service software development company trusted by businesses worldwide.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push the boundaries of what's possible in software development, always staying ahead of the curve with emerging technologies while maintaining our commitment to quality and client success.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="iQtech office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl">Our Values</h2>
              <p className="mt-2 text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <MotionDiv
                  key={value.title}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <value.icon className="h-6 w-6" />
                          </div>
                          <h3 className="font-bold">{value.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl">Key Milestones</h2>
              <p className="mt-2 text-muted-foreground">Our journey of growth and innovation</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <MotionDiv
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={cn(
                      "relative grid gap-4",
                      index % 2 === 0 ? "md:grid-cols-[1fr,auto,1fr]" : "md:grid-cols-[1fr,auto,1fr] md:[&>*:first-child]:col-start-3 md:[&>*:last-child]:col-start-1"
                    )}
                  >
                    <div className="space-y-2">
                      <h3 className="font-bold">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-background">
                        <div className="font-bold">{milestone.year}</div>
                      </div>
                    </div>
                    <div />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl">Our Impact</h2>
              <p className="mt-2 text-muted-foreground">The numbers that define our success</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={stat.label}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-3xl">Ready to Work Together?</h2>
            <p className="mt-2 text-muted-foreground">Let's discuss how we can help bring your ideas to life</p>
            <Link href="/contact" className="mt-6 inline-block">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to client service.",
    icon: Trophy,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership with our clients.",
    icon: Users,
  },
  {
    title: "Purpose",
    description: "We're driven by the impact our solutions have on businesses and end-users.",
    icon: Target,
  },
  {
    title: "Growth",
    description: "We're committed to continuous learning and development of our team.",
    icon: Rocket,
  },
  {
    title: "Care",
    description: "We take pride in building lasting relationships with our clients and employees.",
    icon: Heart,
  },
]

const milestones = [
  {
    year: 2020,
    title: "Company Founded",
    description: "iQtech was established with a vision to transform digital solutions.",
  },
  {
    year: 2021,
    title: "First Major Client",
    description: "Successfully delivered enterprise solution for Fortune 500 company.",
  },
  {
    year: 2022,
    title: "Team Expansion",
    description: "Grew to 50+ employees and opened new development center.",
  },
  {
    year: 2023,
    title: "Global Recognition",
    description: "Received multiple industry awards for innovation and excellence.",
  },
  {
    year: 2024,
    title: "Market Leader",
    description: "Established as a leading software development company.",
  },
]

const stats = [
  {
    value: "100+",
    label: "Clients Worldwide",
  },
  {
    value: "150+",
    label: "Team Members",
  },
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
]

