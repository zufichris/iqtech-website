import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { services } from "@/lib/data/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps) {
    const service = services.find(s => s.slug === params.slug)

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service could not be found.'
        }
    }

    return {
        title: `${service.title} Services`,
        description: service.description,
    }
}

export default function ServicePage({ params }: PageProps) {
    const service = services.find(s => s.slug === params.slug)
    const relatedProjects = caseStudies.filter(project =>
        project.tags.some(tag => service?.technologies.includes(tag))
    )

    if (!service) {
        notFound()
    }

    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="space-y-6">
                    <Link href="/services">
                        <Button variant="ghost" className="group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Services
                        </Button>
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold md:text-5xl">{service.title}</h1>
                        <p className="text-xl text-muted-foreground">{service.description}</p>
                    </div>
                </div>

                <div className="aspect-[2/1] relative overflow-hidden rounded-lg">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Key Features</h2>
                        <ul className="grid gap-2">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Benefits</h2>
                        <ul className="grid gap-2">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator />

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Our Process</h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {service.process.map((step, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg border bg-background p-2"
                            >
                                <div className="flex h-[120px] flex-col justify-between rounded-md p-6">
                                    <span className="text-4xl font-bold text-muted-foreground/50">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <h3 className="font-bold">{step}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator />

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Technologies We Use</h2>
                    <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-base">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                <Separator />

                <div className="space-y-8">
                    <h2 className="text-2xl font-bold">Related Case Studies</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {relatedProjects.map((project, index) => (
                            <Link href={project.link}>
                                <Card className="group overflow-hidden">
                                    <div className="aspect-video relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="space-y-2">
                                            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="group">
                            Start Your Project
                            <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const caseStudies = [
    {
        id: 1,
        title: "E-commerce Platform Transformation",
        description: "Complete digital transformation of a traditional retail business into a modern e-commerce platform.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "PostgreSQL"],
        link: "/portfolio/retail-tech-transformation"
    },
    {
        id: 2,
        title: "Mobile Banking Application",
        description: "Development of a secure and user-friendly mobile banking application.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React Native", "Firebase", "iOS", "Android"],
        link: "/portfolio/mobile-banking"
    },
    {
        id: 3,
        title: "AI-Powered Analytics Platform",
        description: "Creation of an intelligent analytics platform with predictive capabilities.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Python", "TensorFlow", "AWS"],
        link: "/portfolio/ai-analytics"
    },
    {
        id: 4,
        title: "Enterprise Resource Planning System",
        description: "Custom ERP solution for a manufacturing company.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Java", "Spring Boot", "PostgreSQL"],
        link: "/portfolio/manufacturing-erp"
    },
    {
        id: 5,
        title: "Healthcare Management Platform",
        description: "Comprehensive healthcare management system for patient care.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB"],
        link: "/portfolio/healthcare-platform"
    }
]

