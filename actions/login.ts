"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validationFields = LoginSchema.safeParse(value);

  if (!validationFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
