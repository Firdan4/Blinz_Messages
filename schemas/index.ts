import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is Required!",
  }),
  password: z.string().min(8, {
    message: "Password min 8 characters",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Name min 1 characters",
  }),
  email: z.string().email({
    message: "Email is Required!",
  }),
  password: z.string().min(8, {
    message: "Password min 8 characters",
  }),
});
