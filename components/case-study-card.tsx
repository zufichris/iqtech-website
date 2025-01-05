"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

interface Metric {
  label: string
  value: string
}

interface CaseStudyCardProps {
  title: string
  client: string
  description: string
  image: string
  tags: string[]
  metrics: Metric[]
  link: string
}

export function CaseStudyCard({
  title,
  client,
  description,
  image,
  tags,
  metrics,
  link,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={link}>
        <Card className="overflow-hidden transition-all hover:shadow-lg">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold leading-none">{title}</h3>
              <p className="text-sm text-muted-foreground">{client}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-1 text-center">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center text-sm">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

