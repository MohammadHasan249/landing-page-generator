import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/user';

// GET a single landing page
export async function GET(
  req: Request,
  { params }: { params: { landingPageId: string } }
) {
  try {
    const user = await getCurrentUser();

    // Using a mock user, so no need to check
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const landingPage = await db.landingPage.findUnique({
      where: {
        id: params.landingPageId,
        userId: user.id
      },
      include: {
        template: {
          select: {
            name: true,
            category: true
          }
        }
      }
    });

    if (!landingPage) {
      return new NextResponse("Not found", { status: 404 });
    }

    return NextResponse.json(landingPage);
  } catch (error) {
    console.error("[LANDING_PAGE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// PATCH to update a landing page
export async function PATCH(
  req: Request,
  { params }: { params: { landingPageId: string } }
) {
  try {
    const user = await getCurrentUser();

    // Using a mock user, so no need to check
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const body = await req.json();
    const { name, description, content, published } = body;

    // Get current landing page
    const landingPage = await db.landingPage.findUnique({
      where: {
        id: params.landingPageId,
        userId: user.id
      }
    });

    if (!landingPage) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Update the landing page
    const updatedLandingPage = await db.landingPage.update({
      where: {
        id: params.landingPageId
      },
      data: {
        name: name !== undefined ? name : landingPage.name,
        description: description !== undefined ? description : landingPage.description,
        content: content !== undefined ? content : landingPage.content,
        published: published !== undefined ? published : landingPage.published
      }
    });

    return NextResponse.json(updatedLandingPage);
  } catch (error) {
    console.error("[LANDING_PAGE_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// DELETE a landing page
export async function DELETE(
  req: Request,
  { params }: { params: { landingPageId: string } }
) {
  try {
    const user = await getCurrentUser();

    // Using a mock user, so no need to check
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // Check if landing page exists and belongs to user
    const landingPage = await db.landingPage.findUnique({
      where: {
        id: params.landingPageId,
        userId: user.id
      }
    });

    if (!landingPage) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Delete the landing page
    await db.landingPage.delete({
      where: {
        id: params.landingPageId
      }
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[LANDING_PAGE_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 