import z from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;

const createSchema = z.object({
  name: z
    .string({ required_error: "Product name is required" })
    .min(3, { message: "Product name must be at least 3 characters long" })
    .max(30, { message: "Product name must be under 30 characters" }),

  address: z
    .string({ required_error: "Address is required" })
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must be under 100 characters" }),

  description: z
    .string({ required_error: "Description is required" })
    .min(30, { message: "Description must be at least 30 characters long" })
    .max(5000, { message: "Description must be under 5k characters" }),

  logo: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Profile image is required and must be a valid file",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `File size must be under ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
    }),
});

export const ShopSchema = {
  createSchema,
};
