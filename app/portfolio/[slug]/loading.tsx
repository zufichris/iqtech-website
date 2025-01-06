import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-6">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-12 w-2/3" />
          <div className="flex gap-2">
            {Array(3).fill(null).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
        </div>

        <Skeleton className="aspect-video w-full" />

        <div className="grid gap-8 md:grid-cols-3">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-10 w-20 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ))}
        </div>

        <Skeleton className="h-px w-full" />

        <div className="space-y-6">
          <Skeleton className="h-8 w-40" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

