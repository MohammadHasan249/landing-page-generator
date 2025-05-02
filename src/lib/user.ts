import { db } from "./db";

// Mock user interface to match our database schema
interface MockUser {
  id: string;
  clerkId?: string | null; // Will be replaced with actual auth provider ID later
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mock user function - will be replaced with real auth later
export async function getCurrentUser(): Promise<MockUser | null> {
  // Return a mock user for development
  const mockUser: MockUser = {
    id: "mock-user-id",
    email: "dev@example.com",
    name: "Development User",
    createdAt: new Date(),
    updatedAt: new Date()
  };

  return mockUser;
}

// Mock user creation function - will be replaced with real auth later
export async function createUserIfNotExists(): Promise<MockUser | null> {
  // Return a mock user for development
  const mockUser: MockUser = {
    id: "mock-user-id",
    email: "dev@example.com",
    name: "Development User",
    createdAt: new Date(),
    updatedAt: new Date()
  };

  return mockUser;
} 