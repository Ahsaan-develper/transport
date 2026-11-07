import { z } from "zod";
import { equipmentValues } from "@/data/quote-options";

const startOfToday = (): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number"),
  pickup: z.string().trim().min(3, "Enter a pickup city or zip").max(120),
  dropoff: z.string().trim().min(3, "Enter a drop-off city or zip").max(120),
  equipment: z
    .string()
    .refine(
      (value) => (equipmentValues as readonly string[]).includes(value),
      "Select an equipment type"
    ),
  weight: z
    .string()
    .trim()
    .refine(
      (value) => /^\d+(\.\d+)?$/.test(value) && Number(value) > 0 && Number(value) <= 45000,
      "Enter weight in lbs (1 to 45,000)"
    ),
  pickupDate: z
    .string()
    .min(1, "Select a pickup date")
    .refine((value) => {
      const date = new Date(`${value}T00:00:00`);
      return !Number.isNaN(date.getTime()) && date >= startOfToday();
    }, "Pickup date cannot be in the past"),
  message: z.string().max(500, "Keep the message under 500 characters"),
});

export const quickQuoteSchema = quoteSchema.pick({
  pickup: true,
  dropoff: true,
  equipment: true,
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type QuickQuoteFormValues = z.infer<typeof quickQuoteSchema>;

export const quoteDefaults: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  pickup: "",
  dropoff: "",
  equipment: "",
  weight: "",
  pickupDate: "",
  message: "",
};

export const quickQuoteDefaults: QuickQuoteFormValues = {
  pickup: "",
  dropoff: "",
  equipment: "",
};
