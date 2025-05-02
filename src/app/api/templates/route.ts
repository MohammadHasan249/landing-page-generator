import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    // Temporarily skip auth checks
    // const user = await getCurrentUser();
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // Fetch templates - these are global templates not linked to specific users
    const templates = await db.template.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        thumbnail: true,
        category: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(templates);
  } catch (error) {
    console.error("[TEMPLATES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 