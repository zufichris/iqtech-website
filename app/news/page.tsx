"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MotionDiv, fadeInUp } from "@/components/ui/motion"
import { Search, Calendar, ArrowUpRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function NewsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab, setActiveTab] = useState("all")

    const filteredNews = news.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesTab = activeTab === "all" || item.type === activeTab
        return matchesSearch && matchesTab
    })

    return (
        <>
            <section className="py-12 md:py-24 lg:py-32">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Latest News & Updates
                    </h1>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Stay informed about iQtech's latest developments, press releases, and media coverage
                    </p>
                </div>
            </section>

            <section className="pb-12 md:pb-24 lg:pb-32">
                <div className="space-y-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search news..."
                                className="pl-8 w-full sm:w-[300px]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="press">Press Releases</TabsTrigger>
                                <TabsTrigger value="media">Media Coverage</TabsTrigger>
                                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredNews.map((item, index) => (
                            <MotionDiv
                                key={item.id}
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={item.link}>
                                    <Card className="group h-full overflow-hidden">
                                        <CardHeader className="border-b p-0">
                                            <div className="aspect-video relative">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4 p-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <Badge variant="secondary">{item.type}</Badge>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <Calendar className="h-4 w-4" />
                                                        {item.date}
                                                    </div>
                                                </div>
                                                <h2 className="line-clamp-2 text-xl font-bold group-hover:text-primary">
                                                    {item.title}
                                                </h2>
                                                <p className="line-clamp-3 text-sm text-muted-foreground">
                                                    {item.excerpt}
                                                </p>
                                            </div>
                                            <div className="flex items-center text-sm font-medium text-primary">
                                                Read More
                                                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </MotionDiv>
                        ))}
                    </div>

                    {filteredNews.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No news items found matching your search criteria.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

const news = [
    {
        id: 1,
        title: "iQtech Announces New AI-Powered Development Platform",
        excerpt: "Revolutionary platform leverages artificial intelligence to streamline software development process and improve code quality.",
        image: "/placeholder.svg?height=400&width=600",
        date: "March 15, 2024",
        type: "press",
        link: "/news/ai-platform-announcement"
    },
    {
        id: 2,
        title: "iQtech Named Top Software Development Company 2024",
        excerpt: "Industry recognition for excellence in delivering innovative software solutions and maintaining high client satisfaction.",
        image: "/placeholder.svg?height=400&width=600",
        date: "March 10, 2024",
        type: "media",
        link: "/news/top-company-award"
    },
    {
        id: 3,
        title: "The Future of Enterprise Software Development",
        excerpt: "Our CTO shares insights on emerging trends and technologies shaping the future of enterprise software development.",
        image: "/placeholder.svg?height=400&width=600",
        date: "March 5, 2024",
        type: "blog",
        link: "/news/future-enterprise-software"
    },
    {
        id: 4,
        title: "iQtech Expands Global Operations with New Office in Singapore",
        excerpt: "Strategic expansion to better serve growing client base in Asia-Pacific region with local presence and support.",
        image: "/placeholder.svg?height=400&width=600",
        date: "March 1, 2024",
        type: "press",
        link: "/news/singapore-office-opening"
    },
    {
        id: 5,
        title: "How AI is Transforming Software Testing",
        excerpt: "Exploring the impact of artificial intelligence on quality assurance and testing methodologies.",
        image: "/placeholder.svg?height=400&width=600",
        date: "February 28, 2024",
        type: "blog",
        link: "/news/ai-software-testing"
    },
    {
        id: 6,
        title: "iQtech Featured in Tech Innovation Magazine",
        excerpt: "Leading technology publication highlights iQtech's innovative approach to software development and client success stories.",
        image: "/placeholder.svg?height=400&width=600",
        date: "February 25, 2024",
        type: "media",
        link: "/news/tech-magazine-feature"
    },
]

