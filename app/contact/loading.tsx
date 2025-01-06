import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="py-12 md:py-24 lg:py-32">
            <div className="space-y-8">
                {/* Header */}
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <Skeleton className="h-12 w-[50%]" />
                    <Skeleton className="h-4 w-[70%]" />
                </div>

                {/* Contact Grid */}
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 mt-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Contact Info Card */}
                        <div className="space-y-6">
                            <Skeleton className="h-[400px] rounded-lg" />
                        </div>

                        {/* Map Card */}
                        <div className="space-y-4">
                            <Skeleton className="aspect-[16/9] rounded-lg" />
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="space-y-6">
                        <Skeleton className="h-[600px] rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

