import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/user';

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const landingPages = await db.landingPage.findMany({
      where: {
        userId: user.id
      },
      select: {
        id: true,
        title: true,
        description: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        template: {
          select: {
            name: true,
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

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
      });

      if (!template) {
        return new NextResponse("Template not found", { status: 404 });
      }

      templateContent = template.defaultContent;
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
        description,
        userId: user.id,
        templateId,
        content: defaultContent,
        title: name,
        slug: name.toLowerCase().replace(/ /g, '-')
      }
    });

    return NextResponse.json(landingPage);
  } catch (error) {
    console.error("[LANDING_PAGES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 