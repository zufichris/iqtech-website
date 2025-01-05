import { ContactForm } from "@/components/contact-form"

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
      <div className="mx-auto max-w-[600px] mt-8">
        <ContactForm />
      </div>
    </div>
  )
}

