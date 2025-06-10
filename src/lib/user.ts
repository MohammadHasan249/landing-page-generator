import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

// User interface that matches our database schema
interface User {
  id: string;
  email: string;
  name: string | null;
  credits: number;
  isSubscribed: boolean;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Get current authenticated user from Clerk and sync with database
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return null;
    }

    // Try to find user in our database
    let user = await db.user.findUnique({
      where: { id: userId }
    });

    // If user doesn't exist in our DB, the webhook should have created them
    // But as a fallback, we'll return null and let the webhook handle it
    if (!user) {
      console.warn(`User ${userId} authenticated with Clerk but not found in database. Webhook may have failed.`);
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Create user if not exists - mainly used by webhook, but keeping for compatibility
export async function createUserIfNotExists(clerkUser: any): Promise<User | null> {
  try {
    const user = await db.user.upsert({
      where: { id: clerkUser.id },
      update: {
        email: clerkUser.email_addresses[0]?.email_address || '',
        name: `${clerkUser.first_name || ''} ${clerkUser.last_name || ''}`.trim() || null,
      },
      create: {
        id: clerkUser.id,
        email: clerkUser.email_addresses[0]?.email_address || '',
        name: `${clerkUser.first_name || ''} ${clerkUser.last_name || ''}`.trim() || null,
        credits: 10, // initial credits
        isSubscribed: false,
      },
    });

    return user;
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return null;
  }
} 