import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className=" py-12 md:py-24 lg:py-32">
      <div className="space-y-10">
        <div className="space-y-4">
          <Skeleton className="h-12 w-[50%] mx-auto" />
          <Skeleton className="h-4 w-[80%] mx-auto" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {new Array(6).fill(null).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-[240px] w-full rounded-lg" />
              <Skeleton className="h-6 w-[70%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

