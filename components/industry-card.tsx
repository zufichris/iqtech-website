"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import dynamic from "next/dynamic"; // Import dynamic
import Image from "next/image";
import React from "react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
}

// Dynamically import the motion.div component from framer-motion on the client-side
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

export const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  icon,
  features,
  image,
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
             {icon}
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
        <CardHeader>
          <p className="text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </MotionDiv>
  );
};
