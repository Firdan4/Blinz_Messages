import { v } from "convex/values";

import { internalMutation, mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const getAccount = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const findAccount = await ctx.db
      .query("account")
      .filter((e) => e.eq(e.field("userId"), args.userId))
      .first();

    return findAccount;
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    id_token: v.string(),
    type: v.string(),
    provider: v.string(),
    providerAccountId: v.string(),
    access_token: v.string(),
    expires_at: v.number(),
    token_type: v.string(),
    scope: v.string(),
  },
  handler: async (ctx, args) => {
    const account = await ctx.db.insert("account", {
      access_token: args.access_token,
      expires_at: args.expires_at,
      id_token: args.id_token,
      provider: args.provider,
      providerAccountId: args.providerAccountId,
      scope: args.scope,
      token_type: args.token_type,
      type: args.type,
      userId: args.userId,
    });

    return account;
  },
});
export const update = mutation({
  args: {
    _id: v.id("account"),
    userId: v.string(),
    id_token: v.string(),
    type: v.string(),
    provider: v.string(),
    providerAccountId: v.string(),
    access_token: v.string(),
    expires_at: v.number(),
    token_type: v.string(),
    scope: v.string(),
  },
  handler: async (ctx, args) => {
    const account = await ctx.db.patch(args._id, {
      _id: args._id,
      access_token: args.access_token,
      expires_at: args.expires_at,
      id_token: args.id_token,
      provider: args.provider,
      providerAccountId: args.providerAccountId,
      scope: args.scope,
      token_type: args.token_type,
      type: args.type,
      userId: args.userId,
    });

    return account;
  },
});
