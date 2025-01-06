import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <article className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-6">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {post.date}
                </div>
              </div>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <Separator />

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {post.content}
        </div>

        <Separator />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Share this post</h2>
          <div className="flex gap-4">
            {/* Add social share buttons here */}
          </div>
        </div>
      </article>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    slug: "future-of-ai-in-software-development",
    excerpt: "Exploring how artificial intelligence is transforming the way we build software...",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the way we approach software development. From automated testing to intelligent code completion, AI is becoming an integral part of the development process.</p>
      
      <h2>The Impact of AI on Development Workflows</h2>
      <p>AI-powered tools are streamlining development workflows in several ways:</p>
      <ul>
        <li>Automated code review and quality assurance</li>
        <li>Intelligent code completion and suggestions</li>
        <li>Bug prediction and prevention</li>
        <li>Automated testing and deployment</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As AI continues to evolve, we can expect to see even more innovative applications in software development...</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    date: "January 5, 2024",
    tags: ["AI", "Software Development", "Technology"],
    readTime: "5 min read"
  },
  // Add more blog posts...
]

