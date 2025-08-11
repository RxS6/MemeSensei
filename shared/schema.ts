import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const memeExplanations = pgTable("meme_explanations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  memeUrl: text("meme_url"),
  memeType: text("meme_type").notNull(), // 'url' | 'upload'
  fileName: text("file_name"),
  language: text("language").notNull(),
  explanation: text("explanation").notNull(),
  culturalContext: text("cultural_context"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMemeExplanationSchema = createInsertSchema(memeExplanations).omit({
  id: true,
  createdAt: true,
});

export const explainMemeRequestSchema = z.object({
  memeUrl: z.string().url().optional(),
  language: z.string().min(2).max(10), // Updated to support 'hi-en' for Hinglish
  fileData: z.string().optional(), // base64 encoded image data
  fileName: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMemeExplanation = z.infer<typeof insertMemeExplanationSchema>;
export type MemeExplanation = typeof memeExplanations.$inferSelect;
export type ExplainMemeRequest = z.infer<typeof explainMemeRequestSchema>;
