import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl space-y-8">
        <Skeleton className="h-12 w-[50%]" />
        <div className="space-y-4">
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-[40%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-[90%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

