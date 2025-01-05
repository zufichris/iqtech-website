import { IndustryCard } from "@/components/industry-card"
import { Building2, Building, ShoppingBag, Heart, Car, CircuitBoard, Landmark, GraduationCap } from 'lucide-react'

export default function IndustriesPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Industries We Serve
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We deliver innovative solutions across diverse industries, helping businesses transform and succeed in the digital age.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </section>
    </>
  )
}

const industries = [
  {
    title: "Real Estate",
    description: "Digital solutions for property management, virtual tours, and smart building systems.",
    icon: Building2,
    features: [
      "Property Management Systems",
      "Virtual Tour Platforms",
      "Smart Building Integration",
      "Market Analysis Tools"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Healthcare",
    description: "Advanced systems for patient care, medical records, and healthcare administration.",
    icon: Heart,
    features: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Imaging Systems",
      "Healthcare Analytics"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Retail",
    description: "E-commerce solutions and retail management systems for modern businesses.",
    icon: ShoppingBag,
    features: [
      "E-commerce Platforms",
      "Inventory Management",
      "POS Systems",
      "Customer Analytics"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Automotive",
    description: "Digital solutions for dealerships, fleet management, and automotive services.",
    icon: Car,
    features: [
      "Dealership Management",
      "Fleet Tracking",
      "Service Management",
      "Parts Inventory"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "IoT & Manufacturing",
    description: "Smart manufacturing solutions and IoT integration for industry 4.0.",
    icon: CircuitBoard,
    features: [
      "Industrial IoT",
      "Predictive Maintenance",
      "Supply Chain Optimization",
      "Quality Control Systems"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Finance",
    description: "Secure financial software solutions for banking and financial services.",
    icon: Landmark,
    features: [
      "Banking Systems",
      "Payment Processing",
      "Risk Management",
      "Financial Analytics"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Education",
    description: "Digital learning platforms and educational management systems.",
    icon: GraduationCap,
    features: [
      "Learning Management",
      "Student Information",
      "Virtual Classrooms",
      "Assessment Tools"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Corporate",
    description: "Enterprise solutions for business operations and management.",
    icon: Building,
    features: [
      "Enterprise Resource Planning",
      "Business Intelligence",
      "Workflow Automation",
      "Document Management"
    ],
    image: "/placeholder.svg?height=400&width=600"
  }
]

