import { auth, currentUser } from "@clerk/nextjs/server";
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

// Interface for Clerk user data from webhooks
interface ClerkUser {
  id: string;
  email_addresses: Array<{ email_address: string }>;
  first_name?: string;
  last_name?: string;
}

// Interface for Clerk email address
interface ClerkEmailAddress {
  id: string;
  emailAddress: string;
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

    // If user doesn't exist in our DB, create them
    if (!user) {
      console.log(`User ${userId} authenticated with Clerk but not found in database. Creating user...`);
      
      try {
        // Fetch full user data from Clerk using currentUser helper
        const clerkUserData = await currentUser();
        
        if (!clerkUserData) {
          console.error(`Failed to fetch user data from Clerk for userId: ${userId}`);
          return null;
        }
        
        const email = clerkUserData.emailAddresses.find((e: ClerkEmailAddress) => e.id === clerkUserData.primaryEmailAddressId)?.emailAddress || 
                     clerkUserData.emailAddresses[0]?.emailAddress || 
                     `user_${userId}@placeholder.local`; // fallback email
        
        const name = `${clerkUserData.firstName || ''} ${clerkUserData.lastName || ''}`.trim() || null;
        
        user = await db.user.create({
          data: {
            id: userId,
            email: email,
            name: name,
            credits: 10, // Default credits
            isSubscribed: false,
          },
        });
        console.log(`Successfully created user ${userId} in database with email ${email}`);
      } catch (createError) {
        console.error(`Failed to create user ${userId} in database:`, createError);
        return null;
      }
    }

    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Create user if not exists - mainly used by webhook, but keeping for compatibility
export async function createUserIfNotExists(clerkUser: ClerkUser): Promise<User | null> {
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