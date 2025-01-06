import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { services } from "@/lib/data/services"
import ServiceCard from "@/components/service-card"

export const metadata = {
    title: "Services",
    description: "Explore our comprehensive range of software development and technology services tailored to your business needs.",
}

export default function ServicesPage() {
    return (
        <>
            <section className="py-12 md:py-24 lg:py-32">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Our Services
                    </h1>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Comprehensive software solutions tailored to your business needs
                    </p>
                </div>
            </section>

            <section className="pb-12 md:pb-24 lg:pb-32">
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <ServiceCard {...{ ...service, index }} key={service.title} />
                    ))}
                </div>
            </section>
        </>
    )
}



