import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/user';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ landingPageId: string }> }
) {
  try {
    const user = await getCurrentUser();
    const landingPageId = (await params).landingPageId; 

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const landingPage = await db.landingPage.findUnique({
      where: {
        id: landingPageId,
        userId: user.id,
      },
      include: {
        template: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!landingPage) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(landingPage);
  } catch (error) {
    console.error('[LANDING_PAGE_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
