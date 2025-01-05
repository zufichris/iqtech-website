"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Responsive and user-friendly websites and web applications.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-development",
    description: "Cross-platform and native mobile apps for seamless user experiences.",
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
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 py-2 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-light.png"
            alt="iQtech Logo"
            height={60}
            width={60}
            priority
            className="invert sm:h-28 sm:w-28 dark:invert-0  aspect-square rounded-full"
          />
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/contact" className="hidden md:block">
            <Button>Contact Us</Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col gap-4 py-4">
                  <div className="space-y-4">
                    <h4 className="font-medium">Services</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="group block rounded-lg p-3 hover:bg-accent"
                        >
                          <div className="font-medium">{service.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg p-3 hover:bg-accent"
                  >
                    About
                  </Link>
                  <Link
                    href="/portfolio"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg p-3 hover:bg-accent"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg p-3 hover:bg-accent"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg p-3 hover:bg-accent"
                  >
                    Contact
                  </Link>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  )
}

const Separator = React.forwardRef<React.ElementRef<'hr'>, React.ComponentPropsWithoutRef<'hr'>>((props, ref) => (
  <hr ref={ref} className="my-4 border-t border-dashed border-muted-foreground" {...props} />
))
Separator.displayName = 'Separator'

