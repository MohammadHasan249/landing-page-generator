import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  try {
    console.log('[AUTH_TEST] Testing Clerk authentication...');
    
    // Test Clerk auth() function
    const { userId, sessionId } = await auth();
    
    console.log('[AUTH_TEST] Clerk auth result:', { 
      userId: userId || 'null', 
      sessionId: sessionId || 'null' 
    });
    
    return NextResponse.json({
      success: true,
      clerk: {
        userId: userId || null,
        sessionId: sessionId || null,
        authenticated: !!userId,
      },
      headers: {
        authorization: 'Check if Authorization header is present',
        // We can't access headers directly here, but this helps debug
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[AUTH_TEST] Clerk auth error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
} 