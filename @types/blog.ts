export interface IBlog {
    id: number,
    title: string
    excerpt: string
    image: string
    author: {
        name: string,
        avatar: string
    },
    date: string,
    tags: string[],
    readTime: string,
    slug: string
}