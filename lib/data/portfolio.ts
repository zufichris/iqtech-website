import { IProject } from "@/@types/project";

export const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "RetailTech Solutions",
    description: "Complete digital transformation of a traditional retail business into a modern e-commerce platform with advanced features and seamless user experience.",
    image: "/images/retail.png",
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
    image: "/images/health.png",
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
    image: "/images/iot.png",
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
    image: "/images/finance.png",
    tags: ["Mobile Development", "FinTech", "Security"],
    metrics: [
      { label: "User Adoption", value: "85%" },
      { label: "Transaction Speed", value: "2s" },
      { label: "App Rating", value: "4.8/5" },
    ],
    link: "/portfolio/mobile-banking"
  },
] as IProject[]

