import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    password: v.optional(v.string()),
    name: v.string(),
    birthdate: v.string(),
    gender: v.string(),
    image: v.string(),
    code: v.string(),
    status: v.string(),
    last_login_at: v.string(),
  }).index("by_email", ["email"]),
  account: defineTable({
    userId: v.string(),
    id_token: v.string(),
    type: v.string(),
    provider: v.string(),
    providerAccountId: v.string(),
    access_token: v.string(),
    expires_at: v.number(),
    token_type: v.string(),
    scope: v.string(),
  }).index("by_userId", ["userId"]),
  conversation: defineTable({
    name: v.string(),
  }),
  messages: defineTable({
    conversation_id: v.id("conversation"),
    sender_id: v.id("users"),
    receiver_id: v.id("users"),
  }).index("by_conversation_id", ["conversation_id"]),
});
