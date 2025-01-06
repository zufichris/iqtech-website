import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="py-12 md:py-24 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <Skeleton className="h-12 w-[50%] mx-auto" />
          <Skeleton className="h-4 w-[80%] mx-auto" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[95%]" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
          <Skeleton className="aspect-video rounded-xl" />
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-8 w-[200px] mx-auto" />
            <Skeleton className="h-4 w-[300px] mx-auto" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array(6).fill(null).map((_, i) => (
              <Skeleton key={i} className="h-[200px] rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-8 w-[200px] mx-auto" />
            <Skeleton className="h-4 w-[300px] mx-auto" />
          </div>
          <div className="space-y-8">
            {Array(5).fill(null).map((_, i) => (
              <div key={i} className="grid gap-4 md:grid-cols-[1fr,auto,1fr]">
                <Skeleton className="h-24" />
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-24" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-8 w-[200px] mx-auto" />
            <Skeleton className="h-4 w-[300px] mx-auto" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-12 w-24 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

