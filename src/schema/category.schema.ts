import z from "zod";

const createSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(25, { message: "Name must be under 25 characters" }),
});

export const CategorySchema = {
  createSchema,
};
