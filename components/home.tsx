'use client'
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { fadeInUp, MotionDiv } from './ui/motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, Brain, Code, Globe, Server, Smartphone } from 'lucide-react'
import { HoverEffect } from './ui/card-hover-effect'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { industries } from '@/lib/data/industries'
import Image from 'next/image'
import { technologies } from '@/lib/data/technologies'
import { Badge } from './ui/badge'
import { caseStudies } from '@/lib/data/portfolio'
import { blogPosts } from '@/lib/data/blogs'
import { FaqSection } from './faq-section'
import { Testimonials } from './testimonials'
import { SvgIcon } from './ui/icon'

const HomeSections = () => {
  return (
    <React.Fragment>
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
          <MotionDiv
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
          </MotionDiv>
          <MotionDiv
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
          </MotionDiv>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <MotionDiv
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
        </MotionDiv>
        <div className="mx-auto mt-8">
          <HoverEffect items={services} />
        </div>
      </section>

      <section className=" py-12 md:py-24 lg:py-32">
        <MotionDiv
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
            About iQtech
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A leading software development company delivering innovative solutions since 2020
          </p>
        </MotionDiv>

        <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionDiv
              key={stat.label}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-12 flex justify-center"
        >
          <Link href="/about">
            <Button size="lg" variant="outline" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </MotionDiv>
      </section>

      <section className="container py-12 md:py-24 lg:py-32 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 to-muted/50 backdrop-blur-xl" />
        <MotionDiv
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
        </MotionDiv>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {industries.slice(0, 6).map((industry, index) => (
            <MotionDiv
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
                    <div className="rounded-full bg-muted p-1.5 aspect-square  w-fit transition-colors group-hover:bg-muted/70">
                      <SvgIcon src={industry.icon} className='aspect-square rounded-full h-4 w-4 transition-transform group-hover:scale-110 invert'/>
                    </div>
                    <h3 className="text-lg font-bold">{industry.title}</h3>
                  </div>
                </div>
              </Card>
            </MotionDiv>
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
        <MotionDiv
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
        </MotionDiv>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {technologies.slice(0, 6).map((tech, index) => (
            <MotionDiv
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
                      <Image src={tech.icon} height={6} width={5} alt={tech.title} />
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
            </MotionDiv>
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
        <MotionDiv
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
        </MotionDiv>
        <div className="mx-auto grid gap-8 md:grid-cols-2 mt-8">
          {caseStudies.slice(0, 4).map((study, index) => (
            <MotionDiv
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
            </MotionDiv>
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
        <MotionDiv
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
        </MotionDiv>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <MotionDiv
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
            </MotionDiv>
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
    </React.Fragment>
  )
}

export default HomeSections

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
