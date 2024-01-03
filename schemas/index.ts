import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is Required!",
  }),
  password: z.string().min(8, {
    message: "Password min 8 characters",
  }),
});
