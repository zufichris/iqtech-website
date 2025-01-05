"use server"

import { z } from "zod"

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
})

export async function submitContact(data: z.infer<typeof schema>) {
    const result = schema.safeParse(data)

    if (!result.success) {
        throw new Error("Invalid form data")
    }

    // Here you would typically send an email or store the contact form submission
    // For this example, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
}

