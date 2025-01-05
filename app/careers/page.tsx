import { JobCard } from "@/components/job-card"
import { Briefcase, Users, Gem } from 'lucide-react'

export default function CareersPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Join Our Team
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Be part of a team that's shaping the future of technology.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 mt-8">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Briefcase className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Flexible Work</h3>
                <p className="text-sm text-muted-foreground">
                  Work from anywhere with flexible hours and remote options.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Great Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Join a diverse team that values collaboration and innovation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Gem className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and career advancement paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-[58rem]">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>
    </>
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
    description: "We're looking for an experienced Full Stack Developer to join our engineering team...",
    requirements: [
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud services (AWS/Azure/GCP)",
      "Understanding of microservices architecture",
      "Strong problem-solving skills"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Seeking a talented UI/UX Designer to create beautiful and functional interfaces...",
    requirements: [
      "Portfolio demonstrating UI/UX projects",
      "Experience with Figma and design systems",
      "Understanding of user-centered design principles",
      "Strong communication skills"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Looking for a DevOps Engineer to help build and maintain our cloud infrastructure...",
    requirements: [
      "Experience with Docker and Kubernetes",
      "Strong knowledge of CI/CD pipelines",
      "Cloud platform expertise (AWS/Azure/GCP)",
      "Infrastructure as Code experience"
    ]
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Hybrid",
    type: "Full-time",
    experience: "4+ years",
    description: "Seeking an experienced Product Manager to lead product development initiatives...",
    requirements: [
      "Experience in software product management",
      "Strong analytical and strategic thinking",
      "Excellent stakeholder management",
      "Agile methodology expertise"
    ]
  }
]

