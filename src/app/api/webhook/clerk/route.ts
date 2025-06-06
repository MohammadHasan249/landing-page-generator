import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Webhook } from 'svix';

export async function GET() {
  return NextResponse.json({ 
    status: "Webhook endpoint is working",
    methods: ["POST"],
    description: "This endpoint accepts POST requests from Clerk webhooks"
  });
}

export async function POST(req: Request) {
  console.log("🔔 Clerk webhook received");
  
  try {
    // Get the webhook signature from headers
    const headerPayload = req.headers;
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If no signature headers, reject (but only in production)
    if (!svix_id || !svix_timestamp || !svix_signature) {
      if (process.env.NODE_ENV === 'production') {
        console.error("❌ Missing webhook signature headers");
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      console.warn("⚠️ Missing webhook signature headers (allowed in development)");
    }

    const body = await req.text();
    
    // Verify webhook signature (only if we have signature headers)
    if (svix_id && svix_timestamp && svix_signature && process.env.CLERK_WEBHOOK_SECRET) {
      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
      try {
        wh.verify(body, {
          "svix-id": svix_id,
          "svix-timestamp": svix_timestamp,
          "svix-signature": svix_signature,
        });
      } catch (err) {
        console.error("❌ Webhook signature verification failed:", err);
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const parsedBody = JSON.parse(body);
    console.log("📝 Webhook body:", JSON.stringify(parsedBody, null, 2));

    if (parsedBody?.type === "user.created") {
      const clerkUser = parsedBody.data;
      console.log("👤 Creating user:", clerkUser.id, clerkUser.email_addresses[0]?.email_address);

      try {
        const user = await db.user.upsert({
          where: { id: clerkUser.id },
          update: {},
          create: {
            id: clerkUser.id,
            email: clerkUser.email_addresses[0]?.email_address || '',
            name: `${clerkUser.first_name || ''} ${clerkUser.last_name || ''}`.trim(),
            credits: 10, // initial credits
            isSubscribed: false,
          },
        });
        
        console.log("✅ User created successfully:", user);
      } catch (error) {
        console.error("❌ Prisma error creating user:", error);
        return NextResponse.json({ error: "DB error" }, { status: 500 });
      }
    } else {
      console.log("⚠️ Webhook type not handled:", parsedBody?.type);
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
