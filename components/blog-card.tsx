"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock } from 'lucide-react'

interface Author {
  name: string
  avatar: string
}

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  author: Author
  date: string
  tags: string[]
  readTime: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  image,
  author,
  date,
  tags,
  readTime,
  slug
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={`/blog/${slug}`}>
        <Card className="group h-full overflow-hidden flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="space-y-4 flex-1">
            <div className="space-y-2">
              <h3 className="text-xl font-bold transition-colors group-hover:text-primary line-clamp-2 md:text-2xl">
                {title}
              </h3>
              <p className="text-muted-foreground line-clamp-2 text-sm md:text-base">
                {excerpt}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs md:text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-8 w-8 md:h-10 md:w-10">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none md:text-base">{author.name}</p>
                  <p className="text-xs text-muted-foreground md:text-sm">{date}</p>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span className="text-xs md:text-sm">{readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

