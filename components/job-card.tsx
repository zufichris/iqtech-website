"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"

interface JobCardProps {
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
}

export function JobCard({
  title,
  department,
  location,
  type,
  experience,
  description,
  requirements
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{department}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">{location}</Badge>
              <Badge variant="outline">{type}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Experience: {experience}</p>
            <p className="text-sm">{description}</p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Requirements:</p>
            <ul className="list-disc pl-4 text-sm space-y-1">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/careers/apply" className="w-full">
            <Button className="w-full">Apply Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

