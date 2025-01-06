import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-6">
          <Skeleton className="h-10 w-32" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        <Skeleton className="aspect-[2/1] w-full rounded-lg" />

        <div className="grid gap-8 md:grid-cols-2">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <div className="space-y-2">
                {Array(5).fill(null).map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Skeleton className="h-px w-full" />

        <div className="space-y-6">
          <Skeleton className="h-8 w-40" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array(6).fill(null).map((_, i) => (
              <Skeleton key={i} className="h-[120px] rounded-lg" />
            ))}
          </div>
        </div>

        <Skeleton className="h-px w-full" />

        <div className="space-y-6">
          <Skeleton className="h-8 w-48" />
          <div className="flex flex-wrap gap-2">
            {Array(5).fill(null).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24" />
            ))}
          </div>
        </div>

        <Skeleton className="h-px w-full" />

        <div className="space-y-8">
          <Skeleton className="h-8 w-48" />
          <div className="grid gap-8 md:grid-cols-2">
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-video w-full rounded-lg" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <div className="flex gap-2">
                  {Array(3).fill(null).map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

