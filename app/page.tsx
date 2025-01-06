"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Smartphone, Server, Brain, Building2, Heart, ShoppingBag, Car, CircuitBoard } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default async function Home() {
  const { industries } = await import("@/lib/data/industries")
  const { technologies } = await import("@/lib/data/technologies")
  const { caseStudies } = await import("@/lib/data/portfolio")
  const { blogPosts } = await import("@/lib/data/blogs")
  return (
    <TracingBeam>
      <section className="container relative flex flex-col gap-4 pb-12 pt-24 md:pt-32 lg:py-36">
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

      <section className="container py-12 md:py-24 lg:py-32">
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

      <section className="container py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 to-muted/50 backdrop-blur-xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Industries We Serve</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We deliver innovative solutions across diverse industries
          </p>
        </motion.div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {industries.slice(0, 6).map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    {industry.icon}
                    <h3 className="text-lg font-bold">{industry.title}</h3>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/industries">
            <Button size="lg" variant="outline">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Technology Stack</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We leverage cutting-edge technologies to build innovative solutions
          </p>
        </motion.div>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {technologies.slice(0, 6).map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-primary/10 p-2">
                      {tech.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold">{tech.title}</h3>
                      <Badge variant="secondary">{tech.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.slice(0, 4).map((tool) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/technologies">
            <Button size="lg" variant="outline">
              Explore Our Tech Stack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 to-muted/50 backdrop-blur-xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our successful client projects and case studies
          </p>
        </motion.div>
        <div className="mx-auto grid gap-8 md:grid-cols-2 mt-8">
          {caseStudies.slice(0, 4).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={study.link}>
                <Card className="overflow-hidden group">
                  <div className="aspect-video relative">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle>{study.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{study.client}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Latest Insights</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Stay updated with our latest thoughts and insights
          </p>
        </motion.div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog">
            <Button size="lg" variant="outline">
              Read More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <FaqSection />
      <Testimonials />
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
    title: "Cutting-Edge Technologies",
    description: "Blockchain, IoT, CAD, and more integrated into innovative projects.",
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

