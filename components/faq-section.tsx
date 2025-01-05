"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

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
  return (
    <section className=" py-12 md:py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
      >
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Find answers to common questions about our services and processes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[58rem] mt-8"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}

