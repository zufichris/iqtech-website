import { IBlog } from "@/@types/blog";

export const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build software...",
    image: "/images/iot.png",
    author: {
      name: "John Smith",
      avatar: "/images/chen.png"
    },
    date: "January 5, 2024",
    tags: ["AI", "Software Development", "Technology"],
    readTime: "5 min read",
    slug: "future-of-ai-in-software-development"
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt: "Best practices and architecture patterns for creating scalable web applications...",
    image: "/images/finance.png",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/sara.png"
    },
    date: "January 4, 2024",
    tags: ["Web Development", "Architecture", "Performance"],
    readTime: "7 min read",
    slug: "building-scalable-web-applications"
  },
  {
    id: 3,
    title: "The Rise of IoT in Smart Cities",
    excerpt: "How Internet of Things technology is revolutionizing urban development...",
    image: "/images/iot.png",
    author: {
      name: "Michael Chen",
      avatar: "/images/chen.png"
    },
    date: "January 3, 2024",
    tags: ["IoT", "Smart Cities", "Innovation"],
    readTime: "6 min read",
    slug: "rise-of-iot-in-smart-cities"
  },
  {
    id: 4,
    title: "Securing Your Cloud Infrastructure",
    excerpt: "Essential security practices for protecting your cloud-based applications...",
    image: "/images/auto.png",
    author: {
      name: "Emma Davis",
      avatar: "/images/emma.png"
    },
    date: "January 2, 2024",
    tags: ["Cloud", "Security", "DevOps"],
    readTime: "8 min read",
    slug: "securing-your-cloud-infrastructure"
  },
  {
    id: 5,
    title: "Mobile App Development Trends 2024",
    excerpt: "The latest trends and technologies shaping mobile app development...",
    image: "/images/iot.png",
    author: {
      name: "Alex Turner",
      avatar: "/images/chen.png"
    },
    date: "January 1, 2024",
    tags: ["Mobile", "Development", "Trends"],
    readTime: "4 min read",
    slug: "mobile-app-development-trends-2024"
  },
  {
    id: 6,
    title: "Blockchain in Enterprise Solutions",
    excerpt: "Understanding the role of blockchain technology in modern enterprise applications...",
    image: "/images/health.png",
    author: {
      name: "David Kim",
      avatar: "/images/emma.png"
    },
    date: "December 31, 2023",
    tags: ["Blockchain", "Enterprise", "Technology"],
    readTime: "6 min read",
    slug: "blockchain-in-enterprise-solutions"
  }
] as IBlog[]
