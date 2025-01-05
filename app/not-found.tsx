import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <FileQuestion className="h-12 w-12" />
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
          // onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

