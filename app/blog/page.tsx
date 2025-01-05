import { BlogCard } from "@/components/blog-card"
import { BlogFilter } from "@/components/blog-filter"

export default function BlogPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Blog
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Insights, thoughts, and expertise from our team of technology experts.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <BlogFilter />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build software...",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40"
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
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40"
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
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40"
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
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Emma Davis",
      avatar: "/placeholder.svg?height=40&width=40"
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
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Alex Turner",
      avatar: "/placeholder.svg?height=40&width=40"
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
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "December 31, 2023",
    tags: ["Blockchain", "Enterprise", "Technology"],
    readTime: "6 min read",
    slug: "blockchain-in-enterprise-solutions"
  }
]

