import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  if (body?.type === "user.created") {
    const clerkUser = body.data;

    try {
      await prisma.user.upsert({
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
    } catch (error) {
      console.error("Prisma error creating user:", error);
      return NextResponse.json({ error: "DB error" }, { status: 500 });
    }
  }

  return NextResponse.json({ status: "ok" });
}
