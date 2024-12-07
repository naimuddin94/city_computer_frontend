import z from "zod";

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

  discount: z.preprocess(
    (val) =>
      val !== "" && val !== undefined ? parseFloat(val as string) : undefined,
    z.number().min(0).max(100).optional()
  ),

  description: z
    .string()
    .max(500, { message: "Description must be under 500 characters" })
    .optional(),

  category: z
    .string({ required_error: "Category ID is required" })
    .uuid({ message: "Category ID must be a valid UUID" }),
});

export const ProductSchema = {
  createSchema,
};
