import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 5, 2024</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">2. Intellectual Property</h2>
          <p>
            All content included on this website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on this website, is the property of iQtech or its suppliers and protected by copyright and intellectual property laws.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">3. Services</h2>
          <div className="space-y-2">
            <p>Our services include but are not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Software development</li>
              <li>Web and mobile application development</li>
              <li>IT consulting</li>
              <li>System integration</li>
              <li>Technical support</li>
            </ul>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account</li>
            <li>Use our services legally and appropriately</li>
            <li>Not interfere with the security of our services</li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
          <p>
            iQtech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any related matters.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">7. Contact Information</h2>
          <p>
            Questions about the Terms and Conditions should be sent to us at:
          </p>
          <p className="font-medium">iqtechnologyzint@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

