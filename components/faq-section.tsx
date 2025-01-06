"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"
import { MotionDiv } from "./ui/motion"

const faqs = [
  {
    question: "What services does iQtech provide?",
    answer: "iQtech provides a comprehensive range of software development services including web development, mobile app development, enterprise software solutions, IoT integration, AI/ML solutions, and blockchain development. We also offer consulting and maintenance services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and requirements. A simple website might take 4-8 weeks, while a complex enterprise solution could take 3-6 months or more. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, updates, security patches, and feature enhancements. We can customize support plans based on your specific needs."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies (React, Next.js, Node.js), mobile development (React Native, Flutter), cloud services (AWS, Azure, GCP), AI/ML frameworks, blockchain, and IoT technologies. We stay updated with the latest industry trends."
  },
  {
    question: "How do you ensure project security?",
    answer: "We implement industry-standard security practices including encrypted communications, secure code practices, regular security audits, and compliance with data protection regulations. We also provide security documentation and training."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular sprints and client check-ins. This includes requirements gathering, design, development, testing, deployment, and maintenance phases. We ensure transparent communication throughout the process."
  }
]

export function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            onValueChange={(value) => setExpandedIndex(value ? parseInt(value.split('-')[1]) : null)}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-muted rounded-lg overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <AccordionTrigger className="text-left px-6 py-4 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <AccordionContent
                      forceMount
                      className="overflow-hidden"
                    >
                      <MotionDiv
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
                      </MotionDiv>
                    </AccordionContent>
                  )}
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

