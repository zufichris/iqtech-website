"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-3xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground">
          An error occurred while processing your request. Please try again.
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => reset()}
          >
            Try again
          </Button>
          <Button
            variant="default"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}

