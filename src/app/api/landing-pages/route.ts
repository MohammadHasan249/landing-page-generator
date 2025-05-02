import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/user';

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
  try {
    const user = await getCurrentUser();

    // Using a mock user, so no need to check
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const landingPages = await db.landingPage.findMany({
      where: {
        userId: user.id
      },
      select: {
        id: true,
        name: true,
        description: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        template: {
          select: {
            name: true,
            thumbnail: true
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return NextResponse.json(landingPages);
  } catch (error) {
    console.error("[LANDING_PAGES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    // Using a mock user, so no need to check
    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const body = await req.json();
    const { name, description, templateId } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // Get template content if templateId is provided
    let templateContent = null;
    if (templateId) {
      const template = await db.template.findUnique({
        where: {
          id: templateId
        },
        select: {
          content: true
        }
      });

      if (!template) {
        return new NextResponse("Template not found", { status: 404 });
      }

      templateContent = template.content;
    }

    // Create default empty content if no template
    const defaultContent = templateContent || {
      sections: [],
      theme: {
        colors: {
          primary: "#3B82F6",
          secondary: "#10B981",
          background: "#FFFFFF",
          text: "#111827"
        },
        fonts: {
          heading: "Inter",
          body: "Inter"
        }
      }
    };

    const landingPage = await db.landingPage.create({
      data: {
        name,
        description,
        userId: user.id,
        templateId,
        content: defaultContent
      }
    });

    return NextResponse.json(landingPage);
  } catch (error) {
    console.error("[LANDING_PAGES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 