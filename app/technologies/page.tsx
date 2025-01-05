import { TechnologyCard } from "@/components/technology-card"
import { Code2, Globe, Database, Cloud, Shield, Cpu, Brain, Blocks, Server } from 'lucide-react'
import React from "react"
const technologies = [] as {
  title: string
  description: string
  icon: React.ReactNode
  tools: string[]
  category: string
}[]
export default function TechnologiesPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Technology Stack
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.title} {...technology} />
          ))}
        </div>
      </section>
    </>
  )
}



// const temp=[
//   {
//     title: "Web Development",
//     description: "Modern web technologies for responsive and dynamic applications.",
//     icon: Globe,
//     tools: [
//       "React",
//       "Next.js",
//       "Vue.js",
//       "Angular",
//       "TypeScript",
//       "Node.js",
//       "Express"
//     ],
//     category: "Frontend & Backend"
//   },
//   {
//     title: "Mobile Development",
//     description: "Cross-platform and native mobile app development.",
//     icon: Code2,
//     tools: [
//       "React Native",
//       "Flutter",
//       "Swift",
//       "Kotlin",
//       "iOS",
//       "Android"
//     ],
//     category: "Mobile"
//   },
//   {
//     title: "Database Technologies",
//     description: "Robust database solutions for data management.",
//     icon: Database,
//     tools: [
//       "PostgreSQL",
//       "MongoDB",
//       "MySQL",
//       "Redis",
//       "Firebase",
//       "Elasticsearch"
//     ],
//     category: "Database"
//   },
//   {
//     title: "Cloud Services",
//     description: "Cloud infrastructure and deployment solutions.",
//     icon: Cloud,
//     tools: [
//       "AWS",
//       "Azure",
//       "Google Cloud",
//       "Vercel",
//       "Docker",
//       "Kubernetes"
//     ],
//     category: "Cloud"
//   },
//   {
//     title: "Security",
//     description: "Advanced security measures and protocols.",
//     icon: Shield,
//     tools: [
//       "OAuth",
//       "JWT",
//       "SSL/TLS",
//       "Encryption",
//       "Penetration Testing"
//     ],
//     category: "Security"
//   },
//   {
//     title: "IoT & Embedded",
//     description: "Solutions for connected devices and IoT systems.",
//     icon: Cpu,
//     tools: [
//       "Arduino",
//       "Raspberry Pi",
//       "MQTT",
//       "IoT Protocols",
//       "Sensors"
//     ],
//     category: "IoT"
//   },
//   {
//     title: "AI & Machine Learning",
//     description: "Intelligent solutions using AI and ML technologies.",
//     icon: Brain,
//     tools: [
//       "TensorFlow",
//       "PyTorch",
//       "OpenAI",
//       "Computer Vision",
//       "NLP"
//     ],
//     category: "AI/ML"
//   },
//   {
//     title: "Blockchain",
//     description: "Decentralized solutions and smart contracts.",
//     icon: Blocks,
//     tools: [
//       "Ethereum",
//       "Solidity",
//       "Web3.js",
//       "Smart Contracts",
//       "DApps"
//     ],
//     category: "Blockchain"
//   },
//   {
//     title: "DevOps",
//     description: "Continuous integration and deployment tools.",
//     icon: Server,
//     tools: [
//       "Jenkins",
//       "GitLab CI",
//       "GitHub Actions",
//       "Ansible",
//       "Terraform"
//     ],
//     category: "DevOps"
//   }
// ]

