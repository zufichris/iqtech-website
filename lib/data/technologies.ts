import { ITechnology } from "@/@types/technology";

export const technologies = [
    {
        title: "Web Development",
        description: "Modern web technologies for responsive and dynamic applications.",
        icon: "/icons/web.svg",
        tools: [
            "React",
            "Next.js",
            "Vue.js",
            "Angular",
            "TypeScript",
            "Node.js",
            "Express"
        ],
        category: "Frontend & Backend"
    },
    {
        title: "Mobile Development",
        description: "Cross-platform and native mobile app development.",
        icon: "/icons/mobile.svg",
        tools: [
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "iOS",
            "Android"
        ],
        category: "Mobile"
    },
    {
        title: "Database Technologies",
        description: "Robust database solutions for data management.",
        icon: "/icons/databse.svg",
        tools: [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Redis",
            "Firebase",
            "Elasticsearch"
        ],
        category: "Database"
    },
    {
        title: "Cloud Services",
        description: "Cloud infrastructure and deployment solutions.",
        icon: "/icons/cloud.svg",
        tools: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Vercel",
            "Docker",
            "Kubernetes"
        ],
        category: "Cloud"
    },
    {
        title: "Security",
        description: "Advanced security measures and protocols.",
        icon: "/icons/security.svg",
        tools: [
            "OAuth",
            "JWT",
            "SSL/TLS",
            "Encryption",
            "Penetration Testing"
        ],
        category: "Security"
    },
    {
        title: "IoT & Embedded",
        description: "Solutions for connected devices and IoT systems.",
        icon: "/icons/iot.svg",
        tools: [
            "Arduino",
            "Raspberry Pi",
            "MQTT",
            "IoT Protocols",
            "Sensors"
        ],
        category: "IoT"
    },
    {
        title: "AI & Machine Learning",
        description: "Intelligent solutions using AI and ML technologies.",
        icon: "/icons/ai.svg",
        tools: [
            "TensorFlow",
            "PyTorch",
            "OpenAI",
            "Computer Vision",
            "NLP"
        ],
        category: "AI/ML"
    },
    {
        title: "Blockchain",
        description: "Decentralized solutions and smart contracts.",
        icon: '/icons/blockchain.svg',
        tools: [
            "Ethereum",
            "Solidity",
            "Web3.js",
            "Smart Contracts",
            "DApps"
        ],
        category: "Blockchain"
    },
    {
        title: "DevOps",
        description: "Continuous integration and deployment tools.",
        icon: '/icons/devops.svg',
        tools: [
            "Jenkins",
            "GitLab CI",
            "GitHub Actions",
            "Ansible",
            "Terraform"
        ],
        category: "DevOps"
    }
] as ITechnology[]