'use client'
import { IService } from '@/@types/service'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { motion } from 'framer-motion'
interface ServiceCardProps extends IService {
    index: number
}
const ServiceCard: React.FC<ServiceCardProps> = ({ benefits, description, features, icon, image, process, slug, technologies, title, index }) => {
    return (
        <React.Fragment>
            <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
            >
                <Link href={`/services/${slug}`}>
                    <Card className="group overflow-hidden">
                        <div className="aspect-[2/1] relative">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                <div className="flex items-center gap-2">
                                    <Image src={icon} height={6} width={6} alt={title} />
                                    <h2 className="text-xl font-bold">{title}</h2>
                                </div>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                        <CardContent className="space-y-4 pt-6">
                            <p className="text-muted-foreground">{description}</p>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </motion.div>
        </React.Fragment>
    )
}


export default ServiceCard
