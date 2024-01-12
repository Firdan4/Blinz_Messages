"use server";

import * as z from "zod";

import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validationFields = RegisterSchema.safeParse(value);

  if (!validationFields.success) {
    return { error: "Invalid Field!" };
  }

  const { email, name, password } = validationFields.data;

  return { success: "User created!" };
};
