"use client"

import { motion, type MotionProps } from "framer-motion"

interface MotionDivProps extends MotionProps {
    children?: React.ReactNode
    className?: string
}

export function MotionDiv({ children, className, ...props }: MotionDivProps) {
    return (
        <motion.div className={className} {...props}>
            {children}
        </motion.div>
    )
}

// Commonly used animation variants
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
}

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}

export const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
}

export const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
}

export const slideInLeft = {
    initial: { x: -100 },
    animate: { x: 0 },
    exit: { x: -100 }
}

export const slideInRight = {
    initial: { x: 100 },
    animate: { x: 0 },
    exit: { x: 100 }
}

// Default transition
export const defaultTransition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96]
}

// Stagger children animation
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

