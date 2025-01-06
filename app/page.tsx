
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Globe, Smartphone, Server, Brain, } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, MotionDiv } from "@/components/ui/motion"
import HomeSections from "@/components/home"

export default async function Home() {
  const { industries } = await import("@/lib/data/industries")
  const { technologies } = await import("@/lib/data/technologies")
  const { caseStudies } = await import("@/lib/data/portfolio")
  const { blogPosts } = await import("@/lib/data/blogs")
  return (
    <TracingBeam>
     <HomeSections/>
    </TracingBeam>
  )
}


