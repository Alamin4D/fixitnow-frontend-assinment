import { z } from "zod";

export const bookingSchema = z.object({
  scheduledDate: z.string().min(1, "Date is required"),
  scheduledTime: z.string().min(1, "Time is required"),
  address: z.string().min(5, "Address is required"),
  notes: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;