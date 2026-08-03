import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
});


export type LoginSchema = z.infer<typeof loginSchema>;



export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters"),

    email: z.email("Invalid email"),

    phone: z
      .string()
      .min(11, "Phone number is required"),

    address: z
      .string()
      .min(5, "Address is required"),

    role: z.enum(["CUSTOMER", "TECHNICIAN"]),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });