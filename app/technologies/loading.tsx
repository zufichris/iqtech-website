import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <div className="space-y-10">
        <div className="space-y-4">
          <Skeleton className="h-12 w-[50%] mx-auto" />
          <Skeleton className="h-4 w-[80%] mx-auto" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(9).fill(null).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <Skeleton className="h-6 w-[60%]" />
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
  )
}

