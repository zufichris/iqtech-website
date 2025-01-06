import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-12 py-12 md:py-24 lg:py-32">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <Skeleton className="h-12 w-[80%] mx-auto md:h-16" />
          <Skeleton className="h-12 w-[60%] mx-auto md:h-16" />
          <Skeleton className="h-4 w-[50%] mx-auto mt-4" />
        </div>
        <div className="flex gap-4 mt-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[40%] mx-auto" />
          <Skeleton className="h-4 w-[60%] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(5).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-[200px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[30%] mx-auto" />
          <Skeleton className="h-4 w-[50%] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array(4).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-[120px] rounded-xl" />
          ))}
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-10 w-40" />
        </div>
      </div>

      {/* Industries Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[35%] mx-auto" />
          <Skeleton className="h-4 w-[45%] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6).fill(null).map((_, i) => (
            <Skeleton key={i} className="aspect-video rounded-xl" />
          ))}
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[40%] mx-auto" />
          <Skeleton className="h-4 w-[55%] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-[160px] rounded-xl" />
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[35%] mx-auto" />
          <Skeleton className="h-4 w-[50%] mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Array(4).fill(null).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-video rounded-xl" />
              <Skeleton className="h-6 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
              <div className="flex gap-2">
                {Array(3).fill(null).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Insights Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-8 w-[30%] mx-auto" />
          <Skeleton className="h-4 w-[45%] mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-video rounded-xl" />
              <Skeleton className="h-6 w-[80%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

