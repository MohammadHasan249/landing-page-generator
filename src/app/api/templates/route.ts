import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/user';

export async function GET() {
  try {
    console.log('[TEMPLATES_GET] Starting template fetch...');
    
    const user = await getCurrentUser();
    console.log('[TEMPLATES_GET] User check result:', user ? 'authenticated' : 'unauthenticated');
    
    if (!user) {
      console.log('[TEMPLATES_GET] Unauthorized access attempt');
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch templates - these are global templates not linked to specific users
    console.log('[TEMPLATES_GET] Fetching templates from database...');
    const templates = await db.template.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    console.log(`[TEMPLATES_GET] Successfully fetched ${templates.length} templates`);
    return NextResponse.json(templates);
  } catch (error) {
    console.error("[TEMPLATES_GET] Error occurred:", error);
    console.error("[TEMPLATES_GET] Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    return new NextResponse("Internal Error", { status: 500 });
  }
} 