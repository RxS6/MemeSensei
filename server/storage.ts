import { type User, type InsertUser, type MemeExplanation, type InsertMemeExplanation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getMemeExplanation(id: string): Promise<MemeExplanation | undefined>;
  createMemeExplanation(memeExplanation: InsertMemeExplanation): Promise<MemeExplanation>;
  getRecentMemeExplanations(limit: number): Promise<MemeExplanation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private memeExplanations: Map<string, MemeExplanation>;

  constructor() {
    this.users = new Map();
    this.memeExplanations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMemeExplanation(id: string): Promise<MemeExplanation | undefined> {
    return this.memeExplanations.get(id);
  }

  async createMemeExplanation(insertMemeExplanation: InsertMemeExplanation): Promise<MemeExplanation> {
    const id = randomUUID();
    const memeExplanation: MemeExplanation = {
      ...insertMemeExplanation,
      id,
      memeUrl: insertMemeExplanation.memeUrl || null,
      fileName: insertMemeExplanation.fileName || null,
      culturalContext: insertMemeExplanation.culturalContext || null,
      createdAt: new Date(),
    };
    this.memeExplanations.set(id, memeExplanation);
    return memeExplanation;
  }

  async getRecentMemeExplanations(limit: number): Promise<MemeExplanation[]> {
    const allMemes = Array.from(this.memeExplanations.values());
    return allMemes
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
