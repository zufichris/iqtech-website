import { Playfair_Display } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Metadata } from 'next'

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iQtech - Innovative Software Solutions",
  description: "Cutting-edge software development organization providing tailored solutions for businesses across industries.",
  openGraph: {
    title: "iQtech - Innovative Software Solutions",
    description: "Cutting-edge software development organization providing tailored solutions for businesses across industries.",
    images: "/logo-dark.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={playfair.className}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div className="relative min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="pointer-events-none fixed inset-0 z-30 bg-background [mask-image:radial-gradient(circle_at_center,transparent,black)]" />
            <BackgroundBeams />
            <div className="relative px-4 z-40 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

