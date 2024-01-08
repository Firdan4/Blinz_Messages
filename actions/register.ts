"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = (value: z.infer<typeof RegisterSchema>) => {
  console.log(value);
};
