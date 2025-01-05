"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Smartphone, Server, Brain } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <TracingBeam>
      <section className="relative flex flex-col gap-4 pb-12 pt-24 md:pt-32 lg:py-36">
        <div className="absolute inset-0 -z-10 mx-auto max-w-6xl">
          <div className="relative h-full w-full">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="h-full w-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
              Innovative Software Solutions
              <br />
              for Every Need
            </h1>
            <p className="text-center text-muted-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transform your ideas into reality with cutting-edge technology solutions
              <br className="hidden md:inline" />
              tailored to your business needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 min-[400px]:flex-row"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We deliver high-quality software solutions designed to exceed client expectations.
          </p>
        </motion.div>
        <div className="mx-auto mt-8">
          <HoverEffect items={services} />
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 to-muted/50 backdrop-blur-xl" />
        <div className="py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Why Choose iQtech?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We combine expertise with innovation to deliver exceptional results.
            </p>
          </motion.div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-xl">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/50 to-primary-foreground/50 opacity-0 transition-opacity group-hover:opacity-10" />
                  <CardHeader>
                    <CardTitle className="text-lg transition-colors group-hover:text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <FaqSection />
    </TracingBeam>
  )
}

const services = [
  {
    title: "Web Development",
    description: "Responsive and user-friendly websites and web applications.",
    icon: Globe,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and native mobile apps for seamless experiences.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Software",
    description: "Scalable and robust solutions for businesses of all sizes.",
    icon: Server,
  },
  {
    title: "Custom Software",
    description: "Unique, tailored solutions to meet specific client needs.",
    icon: Code,
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems and machine learning applications.",
    icon: Brain,
  },
]

const features = [
  {
    title: "Client-Focused Solutions",
    description: "We prioritize your goals and needs above all else.",
  },
  {
    title: "Quality Commitment",
    description: "High-quality, reliable results every time.",
  },
  {
    title: "Diverse Expertise",
    description: "Mastery in various technologies and platforms.",
  },
  {
    title: "Timely Delivery",
    description: "Projects completed on schedule, without compromise.",
  },
]

