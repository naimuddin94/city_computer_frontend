import z from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;

const createSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be under 50 characters" }),

  price: z.preprocess(
    (val) => parseFloat(val as string),
    z
      .number({ invalid_type_error: "Price must be a valid number" })
      .min(0.01, { message: "Price must be at least 0.01" })
  ),

  stock: z.preprocess(
    (val) => parseInt(val as string, 10),
    z
      .number({ invalid_type_error: "Stock must be a valid number" })
      .int({ message: "Stock must be an integer" })
      .nonnegative({ message: "Stock must be a non-negative value" })
  ),

  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Profile image is required and must be a valid file",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `File size must be under ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
    }),

  description: z
    .string({ required_error: "Description is required" })
    .min(30, { message: "Description must be at least 30 characters long" })
    .max(50000, { message: "Description must be under 50k characters" }),

  category: z.string({ required_error: "Category is required" }),
});

export const ProductSchema = {
  createSchema,
};
