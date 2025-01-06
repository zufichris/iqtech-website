import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

interface PageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps) {
    const project = caseStudies.find(p => p.slug === params.slug)

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.'
        }
    }

    return {
        title: project.title,
        description: project.description,
    }
}

export default function ProjectPage({ params }: PageProps) {
    const project = caseStudies.find(p => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl space-y-12">
                <div className="space-y-6">
                    <Link href="/portfolio">
                        <Button variant="ghost" className="group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Portfolio
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="aspect-video relative overflow-hidden rounded-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {project.metrics.map((metric) => (
                        <div key={metric.label} className="space-y-2 text-center">
                            <div className="text-3xl font-bold">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                    ))}
                </div>

                <Separator />

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">About the Project</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Key Features</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            {project.features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech) => (
                                <Badge key={tech} variant="outline">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link href={project.liveUrl || '#'}>
                        <Button className="group">
                            Visit Live Site
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const caseStudies = [
    {
        title: "E-commerce Platform Transformation",
        slug: "retail-tech-transformation",
        client: "RetailTech Solutions",
        description: "Complete digital transformation of a traditional retail business into a modern e-commerce platform. We implemented advanced features including real-time inventory management, AI-powered product recommendations, and seamless payment integration.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["E-commerce", "Web Development", "UI/UX"],
        metrics: [
            { label: "Increase in Sales", value: "150%" },
            { label: "User Engagement", value: "3x" },
            { label: "Load Time", value: "0.8s" },
        ],
        features: [
            "Real-time inventory management",
            "AI-powered product recommendations",
            "Mobile-first responsive design",
            "Multi-currency support",
            "Advanced analytics dashboard",
        ],
        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Redis",
            "AWS",
        ],
        liveUrl: "https://retailtech.example.com",
    },
    // Add more case studies...
]

