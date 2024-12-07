import z from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024;

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a valid string",
    })
    .email("Please provide a valid email address"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a valid string",
    })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(32, { message: "Password must be under 32 characters" }),
});

const registerSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a valid string",
    })
    .min(4, { message: "Name must be at least 4 characters long" })
    .max(30, { message: "Name must be under 30 characters" }),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a valid string",
    })
    .email("Please provide a valid email address"),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a valid string",
    })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(32, { message: "Password must be under 32 characters" }),
  files: z
    .any()
    .refine((files) => files[0] instanceof File, {
      message: "Profile image is required and must be a valid file",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be under ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
    }),
});

export const AuthSchema = {
  loginSchema,
  registerSchema,
};
