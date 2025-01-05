import { CaseStudyCard } from "@/components/case-study-card"
import { ProjectFilter } from "@/components/project-filter"

export default function PortfolioPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Portfolio
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our successful projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <ProjectFilter />
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </section>
    </>
  )
}

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "RetailTech Solutions",
    description: "Complete digital transformation of a traditional retail business into a modern e-commerce platform with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["E-commerce", "Web Development", "UI/UX"],
    metrics: [
      { label: "Increase in Sales", value: "150%" },
      { label: "User Engagement", value: "3x" },
      { label: "Load Time", value: "0.8s" },
    ],
    link: "/portfolio/retail-tech-transformation"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "MedCare Innovations",
    description: "Development of a comprehensive healthcare management system that streamlines patient care, appointment scheduling, and medical record management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Healthcare", "Enterprise Software", "Security"],
    metrics: [
      { label: "Patient Satisfaction", value: "95%" },
      { label: "Time Saved", value: "60%" },
      { label: "Data Accuracy", value: "99.9%" },
    ],
    link: "/portfolio/healthcare-management"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    client: "DataSmart Analytics",
    description: "Creation of an intelligent analytics platform that provides real-time insights and predictive analysis for business decision-making.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AI/ML", "Data Analytics", "Dashboard"],
    metrics: [
      { label: "Processing Speed", value: "10x" },
      { label: "Prediction Accuracy", value: "92%" },
      { label: "Cost Reduction", value: "40%" },
    ],
    link: "/portfolio/ai-analytics"
  },
  {
    id: 4,
    title: "Mobile Banking Application",
    client: "SecureBank Financial",
    description: "Development of a secure and user-friendly mobile banking application with advanced features and biometric authentication.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile Development", "FinTech", "Security"],
    metrics: [
      { label: "User Adoption", value: "85%" },
      { label: "Transaction Speed", value: "2s" },
      { label: "App Rating", value: "4.8/5" },
    ],
    link: "/portfolio/mobile-banking"
  },
]

