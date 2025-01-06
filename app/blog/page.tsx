import { BlogCard } from "@/components/blog-card"
import { BlogFilter } from "@/components/blog-filter"
import { blogPosts } from "@/lib/data/blogs"

export default function BlogPage() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Blog
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Insights, thoughts, and expertise from our team of technology experts.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <BlogFilter />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </>
  )
}


