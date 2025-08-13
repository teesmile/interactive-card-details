import {z} from "zod";

export const cardSchema = z.object({
    cardNumber: z
        .string()
        .length(16, "Card number must be exactly 16 digits")
        .regex(/^\d+$/, "Card number must contain only digits"),
    cardHolderName: z
        .string()
        .min(4, "Card holder name must be at least 4 characters long")
        .max(30, "Card holder name must be at most 30 characters long")
        .regex(/^[a-zA-Z\s]+$/, "Card holder name must contain only letters and spaces"),
    expiryDate: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\ \d{2}$/, "Expiry date must be in MM/YY format"),
    cvc: z
        .string()
        .length(3, "CVC must be exactly 3 digits")
        .regex(/^\d+$/, "CVC must contain only digits")
})