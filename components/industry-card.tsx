"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type LucideIcon } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

interface IndustryCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  image: string
}

export function IndustryCard({
  title,
  description,
  icon: Icon,
  features,
  image
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <Icon className="h-5 w-5" />
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
        <CardHeader>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}

