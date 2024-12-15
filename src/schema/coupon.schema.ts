import { z } from "zod";

const createSchema = z.object({
  code: z
    .string({ required_error: "Coupon code is required" })
    .min(3, { message: "Coupon code should be at least 3 characters long" })
    .max(20, { message: "Coupon code should not exceed 20 characters" }),

  discount: z.preprocess(
    (val) => parseInt(val as string, 10),
    z
      .number({ invalid_type_error: "Discount must be a valid number" })
      .int({ message: "Discount must be an integer" })
      .nonnegative({ message: "Discount must be a non-negative value" })
  ),

  expiryDate: z.preprocess(
    (arg) => {
      if (typeof arg === "string") {
        const date = new Date(arg);
        return date;
      }
      return arg;
    },
    z.date().refine((date) => date > new Date(), {
      message: "Expiry date should be in the future",
    })
  ),
});

export const ShopValidation = {
  createSchema,
};
