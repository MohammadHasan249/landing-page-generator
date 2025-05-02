import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create basic templates
  const templates = [
    {
      name: 'Business',
      description: 'Professional template perfect for businesses and corporate websites',
      thumbnail: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&h=300&fit=crop',
      category: 'business',
      isDefault: true,
      content: {
        sections: [
          {
            type: 'hero',
            title: 'Your Business Name',
            subtitle: 'Professional services for your needs',
            cta: 'Get Started',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
          },
          {
            type: 'features',
            title: 'Our Services',
            features: [
              {
                title: 'Service 1',
                description: 'Description of service 1',
                icon: 'lightbulb',
              },
              {
                title: 'Service 2',
                description: 'Description of service 2',
                icon: 'chart',
              },
              {
                title: 'Service 3',
                description: 'Description of service 3',
                icon: 'shield',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Startup',
      description: 'Modern and innovative template for startups and digital products',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&h=300&fit=crop',
      category: 'startup',
      isDefault: true,
      content: {
        sections: [
          {
            type: 'hero',
            title: 'Your Startup',
            subtitle: 'Innovative solution for your problems',
            cta: 'Try Demo',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
          },
          {
            type: 'features',
            title: 'Key Features',
            features: [
              {
                title: 'Feature 1',
                description: 'Description of feature 1',
                icon: 'star',
              },
              {
                title: 'Feature 2',
                description: 'Description of feature 2',
                icon: 'bolt',
              },
              {
                title: 'Feature 3',
                description: 'Description of feature 3',
                icon: 'cube',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'E-commerce',
      description: 'Template optimized for online stores and product showcases',
      thumbnail: 'https://images.unsplash.com/photo-1531566558501-ce2cc78ecea4?w=500&h=300&fit=crop',
      category: 'ecommerce',
      isDefault: true,
      content: {
        sections: [
          {
            type: 'hero',
            title: 'Your Store Name',
            subtitle: 'Premium products for your lifestyle',
            cta: 'Shop Now',
            image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200',
          },
          {
            type: 'products',
            title: 'Featured Products',
            products: [
              {
                title: 'Product 1',
                description: 'Description of product 1',
                price: '$99',
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
              },
              {
                title: 'Product 2',
                description: 'Description of product 2',
                price: '$149',
                image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=300',
              },
              {
                title: 'Product 3',
                description: 'Description of product 3',
                price: '$199',
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
              },
            ],
          },
        ],
      },
    },
  ];

  for (const template of templates) {
    await prisma.template.upsert({
      where: { id: uuidv4() },
      update: template,
      create: template,
    });
  }

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 