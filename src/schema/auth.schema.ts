import z from "zod";

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
});

export const AuthSchema = {
  loginSchema,
  registerSchema,
};
