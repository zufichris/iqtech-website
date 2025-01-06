import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Globe, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Contact Us
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Have a project in mind? Let's talk about how we can help.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 mt-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Reach out to us through any of these channels
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Street, Silicon Valley
                        <br />
                        California, USA 94025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:iqtechnologyzint@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        iqtechnologyzint@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+1234567890"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Globe className="h-5 w-5 text-primary" />
                    <div className="grid gap-1">
                      <h3 className="font-semibold">Website</h3>
                      <a
                        href="https://iqtech.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        www.iqtech.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <h3 className="font-semibold">Follow Us</h3>
                  <div className="flex gap-4">
                    <Link href="https://twitter.com/iqtech" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/company/iqtech" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://instagram.com/iqtech" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </Link>
                    <Link href="https://facebook.com/iqtech" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5384568650463!2d-122.08374688397588!3d37.422408779825136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1627400099380!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/9]"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

