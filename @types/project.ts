export interface IProject {
    id: number,
    title: string,
    client: string,
    description: string,
    image:string,
    tags: string[],
    metrics: { label: string, value: string }[],
    link: string
}