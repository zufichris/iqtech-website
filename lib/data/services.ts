import { IService } from "@/@types/service";

export const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Create responsive, user-friendly websites and web applications that deliver exceptional user experiences and drive business growth.",
    icon: '/icons/web.svg',
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Content Management Systems",
      "API Development & Integration"
    ],
    benefits: [
      "Improved User Experience",
      "Increased Conversion Rates",
      "Better Performance",
      "Scalable Architecture",
      "SEO Optimization"
    ],
    process: [
      "Requirements Analysis",
      "UI/UX Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance"
    ]
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    description: "Build native and cross-platform mobile applications that provide seamless experiences across all devices and platforms.",
    icon: '/icons/mobile.svg',
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    features: [
      "Native Mobile Apps",
      "Cross-platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Push Notifications"
    ],
    benefits: [
      "Wider Market Reach",
      "Platform Consistency",
      "Offline Functionality",
      "Enhanced User Engagement",
      "Regular Updates"
    ],
    process: [
      "Market Research",
      "Prototyping",
      "Development",
      "Testing",
      "App Store Submission",
      "Monitoring"
    ]
  },
  {
    title: "Enterprise Software",
    slug: "enterprise-software",
    description: "Develop scalable, secure, and efficient enterprise solutions that streamline operations and boost productivity.",
    icon: "/icons/enterprise.svg",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Java", "Spring Boot", "Kubernetes", "AWS", "Microservices"],
    features: [
      "ERP Systems",
      "CRM Solutions",
      "Business Intelligence",
      "Cloud Integration",
      "Legacy System Modernization"
    ],
    benefits: [
      "Improved Efficiency",
      "Cost Reduction",
      "Data Security",
      "Scalability",
      "Integration Capabilities"
    ],
    process: [
      "Business Analysis",
      "Architecture Design",
      "Development",
      "Integration",
      "Testing",
      "Training"
    ]
  },
  {
    title: "Custom Software",
    slug: "custom-software",
    description: "Create tailor-made software solutions that address your specific business challenges and requirements.",
    icon: "/icons/custom.svg",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Python", "Go", "Docker", "Azure", "MongoDB"],
    features: [
      "Bespoke Solutions",
      "Workflow Automation",
      "Integration Services",
      "Data Analytics",
      "Reporting Tools"
    ],
    benefits: [
      "Competitive Advantage",
      "Process Optimization",
      "Customized Features",
      "Future-proof Solutions",
      "Ongoing Support"
    ],
    process: [
      "Discovery",
      "Planning",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance"
    ]
  },
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    description: "Leverage artificial intelligence and machine learning to create intelligent systems that drive innovation and growth.",
    icon: '/icons/ai.svg',
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "scikit-learn", "MLOps"],
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration"
    ],
    benefits: [
      "Data-driven Insights",
      "Automation",
      "Enhanced Decision Making",
      "Improved Accuracy",
      "Innovation"
    ],
    process: [
      "Data Collection",
      "Model Development",
      "Training",
      "Validation",
      "Deployment",
      "Monitoring"
    ]
  }
] as IService[]