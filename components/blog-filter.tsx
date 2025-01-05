"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { motion } from "framer-motion"

const categories = [
  "All",
  "Technology",
  "Development",
  "AI",
  "Cloud",
  "Security",
  "IoT",
  "Mobile",
  "Blockchain"
]

export function BlogFilter() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-8 w-full sm:w-[300px]"
          />
        </div>
        <Button variant="outline">
          Latest
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

