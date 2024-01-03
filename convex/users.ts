import { v } from "convex/values";

import { internalMutation, mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

import generateCode from "../app/libs/generateCode";

export const getUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const findUser = await ctx.db
      .query("users")
      .filter((e) => e.eq(e.field("email"), args.email))
      .first();

    return findUser;
  },
});

export const create = mutation({
  args: {
    email: v.string(),
    password: v.optional(v.string()),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const code = generateCode();
    const user = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      password: args.password,
      last_login_at: "",
      birthdate: "",
      gender: "",
      code,
      image: "",
      status: "",
    });

    return user;
  },
});

export const createBySosmed = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const code = generateCode();
    const user = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      last_login_at: "",
      birthdate: "",
      gender: "",
      code,
      image: args.image,
      status: "",
    });

    return user;
  },
});
