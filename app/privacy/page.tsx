import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 5, 2024</p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            At iQtech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
              <li>Contact us for support</li>
            </ul>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Notify you about changes to our services</li>
            <li>Provide customer support</li>
            <li>Monitor the usage of our services</li>
            <li>Detect, prevent, and address technical issues</li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request transfer of your information</li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-medium">iqtechnologyzint@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

