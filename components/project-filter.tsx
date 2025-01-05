"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const filters = [
  "All",
  "Web Development",
  "Mobile Development",
  "Enterprise Software",
  "AI/ML",
  "E-commerce",
  "Healthcare",
]

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = React.useState("All")

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <motion.div
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className="transition-all"
          >
            {filter}
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

