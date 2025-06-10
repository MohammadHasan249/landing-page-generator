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

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ landingPageId: string }> }
) {
  try {
    const user = await getCurrentUser();
    const landingPageId = (await params).landingPageId;

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { title, description, content, published } = body;

    // First check if the landing page exists and belongs to the user
    const existingLandingPage = await db.landingPage.findUnique({
      where: {
        id: landingPageId,
        userId: user.id,
      },
    });

    if (!existingLandingPage) {
      return new NextResponse('Not found', { status: 404 });
    }

    // Update the landing page
    const updatedLandingPage = await db.landingPage.update({
      where: {
        id: landingPageId,
        userId: user.id,
      },
      data: {
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(content !== undefined && { content }),
        ...(published !== undefined && { published }),
        // Auto-update slug if title changes
        ...(title && { slug: title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') }),
      },
      include: {
        template: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(updatedLandingPage);
  } catch (error) {
    console.error('[LANDING_PAGE_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ landingPageId: string }> }
) {
  try {
    const user = await getCurrentUser();
    const landingPageId = (await params).landingPageId;

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // First check if the landing page exists and belongs to the user
    const existingLandingPage = await db.landingPage.findUnique({
      where: {
        id: landingPageId,
        userId: user.id,
      },
    });

    if (!existingLandingPage) {
      return new NextResponse('Not found', { status: 404 });
    }

    // Delete the landing page
    await db.landingPage.delete({
      where: {
        id: landingPageId,
        userId: user.id,
      },
    });

    return NextResponse.json({ message: 'Landing page deleted successfully' });
  } catch (error) {
    console.error('[LANDING_PAGE_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
