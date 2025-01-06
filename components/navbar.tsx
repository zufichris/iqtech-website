"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { MotionDiv } from "./ui/motion"

const mainNav = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "/about",
        description: "Learn about our mission, vision, and values.",
      },
      {
        title: "Team",
        href: "/team",
        description: "Meet the talented people behind iQtech.",
      },
      {
        title: "Careers",
        href: "/careers",
        description: "Join our team and shape the future of technology.",
      },
      {
        title: "News & Media",
        href: "/news",
        description: "Latest updates, press releases, and media coverage.",
      }
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Web Development",
        href: "/services/web-development",
        description: "Responsive and user-friendly websites and web applications.",
      },
      {
        title: "Mobile Development",
        href: "/services/mobile-development",
        description: "Cross-platform and native mobile apps for seamless experiences.",
      },
      {
        title: "Enterprise Software",
        href: "/services/enterprise-software",
        description: "Scalable and robust solutions for businesses of all sizes.",
      },
      {
        title: "Custom Software",
        href: "/services/custom-software",
        description: "Unique, tailored solutions to meet specific client needs.",
      },
      {
        title: "AI Solutions",
        href: "/services/ai-solutions",
        description: "Intelligent systems and machine learning applications.",
      }
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Industries",
        href: "/industries",
        description: "Specialized solutions for different business sectors.",
      },
      {
        title: "Technologies",
        href: "/technologies",
        description: "Our technology stack and expertise.",
      },
      {
        title: "Case Studies",
        href: "/portfolio",
        description: "Success stories and project showcases.",
      },
      {
        title: "Partners",
        href: "/partners",
        description: "Our technology and business partnerships.",
      }
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "/blog",
        description: "Insights and updates from our team.",
      },
      {
        title: "Documentation",
        href: "/docs",
        description: "Technical guides and documentation.",
      },
      {
        title: "Support",
        href: "/support",
        description: "Get help with our products and services.",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Frequently asked questions.",
      }
    ],
  }
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <Image
            src="/logo-light.png"
            alt="iQtech Logo"
            height={60}
            width={60}
            priority
            className="invert sm:h-28 sm:w-28 dark:invert-0  aspect-square rounded-full"
          />
        </Link>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {mainNav.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger
                    onMouseEnter={() => setActiveMenu(item.title)}
                    className="h-12 px-5 text-base font-medium transition-all hover:bg-accent data-[active]:bg-accent data-[state=open]:bg-accent"
                  >
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MotionDiv
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="w-[500px] lg:w-[600px]"
                    >
                      <div className="grid grid-cols-2 gap-4 p-6">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="group relative rounded-lg p-4 hover:bg-muted/50"
                          >
                            <div className="space-y-2">
                              <h3 className="text-base font-medium leading-none group-hover:text-primary">
                                {subItem.title}
                              </h3>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </div>
                            <ArrowRight className="absolute bottom-4 right-4 h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </MotionDiv>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden lg:block">
            <Button size="lg" className="relative overflow-hidden font-medium">
              <MotionDiv
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact Us
              </MotionDiv>
              <MotionDiv
                className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <MotionDiv
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </MotionDiv>
                  ) : (
                    <MotionDiv
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </MotionDiv>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96">
              <SheetHeader className="border-b pb-4">
                <SheetTitle className="text-lg font-medium">Navigation Menu</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col gap-6 py-6">
                  {mainNav.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <div className="flex items-center gap-2 text-base font-medium">
                        <MotionDiv
                          initial={{ rotate: 0 }}
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </MotionDiv>
                        {section.title}
                      </div>
                      <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 gap-2 pl-6"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="group relative rounded-lg p-4 hover:bg-muted/50"
                          >
                            <div className="pr-6">
                              <div className="font-medium group-hover:text-primary">
                                {item.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {item.description}
                              </div>
                            </div>
                            <ArrowRight className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </MotionDiv>
                    </div>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 block"
                  >
                    <Button className="w-full" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

