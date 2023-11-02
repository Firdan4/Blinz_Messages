import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    password: v.string(),
    name: v.string(),
    birthdate: v.string(),
    gender: v.string(),
    image: v.string(),
    code: v.string(),
    status: v.string(),
    last_login_at: v.string(),
  }).index("by_email", ["email"]),
  conversation: defineTable({
    name: v.string(),
  }),
  messages: defineTable({
    conversation_id: v.id("conversation"),
    sender_id: v.id("users"),
    receiver_id: v.id("users"),
  }).index("by_conversation_id", ["conversation_id"]),
});
