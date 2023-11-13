import * as z from 'zod'

// =============================================
// USER
// =============================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
})

export const SigninValidation = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
})

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  bio: z.string(),
})

// =============================================
// Post
// =============================================
export const PostValidation = z.object({
  caption: z
    .string()
    .min(2, { message: 'Caption must be at least 5 characters.' })
    .max(2200, { message: 'Caption must be less than 2200 characters.' }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(1, { message: 'This field is required.' })
    .max(1000, { message: 'Maximum 1000 characters.' }),
  tags: z.string(),
})
