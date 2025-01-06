import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Building } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { JobApplicationForm } from "@/components/job-application-form"

interface PageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: PageProps) {
    const job = jobs.find(j => j.id.toString() === params.id)

    if (!job) {
        return {
            title: 'Position Not Found',
            description: 'The requested job position could not be found.'
        }
    }

    return {
        title: `${job.title} - Careers`,
        description: job.description,
    }
}

export default function CareerPage({ params }: PageProps) {
    const job = jobs.find(j => j.id.toString() === params.id)

    if (!job) {
        notFound()
    }

    return (
        <div className=" py-12 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl space-y-12">
                <div className="space-y-6">
                    <Link href="/careers">
                        <Button variant="ghost" className="group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Careers
                        </Button>
                    </Link>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold md:text-5xl">{job.title}</h1>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center text-muted-foreground">
                                <Building className="mr-2 h-4 w-4" />
                                {job.department}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="mr-2 h-4 w-4" />
                                {job.location}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Clock className="mr-2 h-4 w-4" />
                                {job.type}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Badge>{job.experience}</Badge>
                            {job.tags?.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">About the Role</h2>
                        <p className="text-muted-foreground">{job.description}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Requirements</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    {job.responsibilities && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Responsibilities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {job.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {job.benefits && (
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Benefits</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <Separator />

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Apply for this Position</h2>
                    <JobApplicationForm jobTitle={job.title} />
                </div>
            </div>
        </div>
    )
}

const jobs = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "5+ years",
        description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions for our clients.",
        requirements: [
            "Strong experience with React, Node.js, and TypeScript",
            "Experience with cloud services (AWS/Azure/GCP)",
            "Understanding of microservices architecture",
            "Strong problem-solving skills"
        ],
        responsibilities: [
            "Design and implement scalable web applications",
            "Collaborate with cross-functional teams",
            "Mentor junior developers",
            "Participate in code reviews",
            "Write clean, maintainable code"
        ],
        benefits: [
            "Competitive salary",
            "Remote work options",
            "Health insurance",
            "Professional development budget",
            "Flexible vacation policy"
        ],
        tags: ["React", "Node.js", "TypeScript", "Cloud"]
    },
    // Add more jobs...
]

