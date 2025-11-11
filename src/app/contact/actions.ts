"use server"

import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
        success: false,
        message: "Invalid form data."
    }
  }
  
  // Here you would typically send an email using a service like Resend, SendGrid, or Nodemailer.
  // For this example, we'll just log the data and simulate a successful submission.
  console.log("Contact form submitted:", validatedFields.data)
  
  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Message sent successfully!"
  }
}
