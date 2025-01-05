"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "iQtech transformed our business with their innovative solutions. Their team's expertise and dedication to quality are unmatched.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "CTO, Global Systems",
    content: "Working with iQtech was a game-changer for our company. Their custom software solutions helped us streamline operations and boost efficiency.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    role: "Product Manager, InnovateCo",
    content: "The team at iQtech consistently delivers exceptional results. Their attention to detail and commitment to deadlines is impressive.",
    image: "/placeholder.svg"
  },
]

export function Testimonials() {
  return (
    <section className=" py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Don't just take our word for it. Here's what our clients have to say about working with iQtech.
        </p>
      </motion.div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <CardContent className="mt-6 grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="text-sm font-medium leading-none">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  "{testimonial.content}"
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

