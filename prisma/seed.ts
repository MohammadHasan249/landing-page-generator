import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create comprehensive templates for different business types
  const templates = [
    {
      name: 'Digital Agency',
      description: 'Perfect for marketing agencies, design studios, and digital consultancies',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Transform Your Digital Presence',
            subtitle: 'We create stunning websites and powerful marketing campaigns that drive results for your business.',
            cta: 'Start Your Project',
            backgroundImage: 'https://images.unsplash.com/photo-1559136555-9303baea8eee?w=1200&h=600&fit=crop',
          },
          {
            type: 'services',
            title: 'Our Services',
            subtitle: 'Full-service digital solutions to grow your business',
            services: [
              {
                title: 'Web Design & Development',
                description: 'Custom websites that convert visitors into customers',
                icon: 'code',
              },
              {
                title: 'Digital Marketing',
                description: 'SEO, PPC, and social media campaigns that deliver ROI',
                icon: 'trending-up',
              },
              {
                title: 'Brand Identity',
                description: 'Logos, branding, and visual identity that stands out',
                icon: 'palette',
              },
            ],
          },
          {
            type: 'testimonials',
            title: 'What Our Clients Say',
            testimonials: [
              {
                text: 'They increased our website traffic by 300% in just 3 months!',
                author: 'Sarah Johnson',
                company: 'TechStart Inc.',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b784?w=100&h=100&fit=crop',
              },
            ],
          },
          {
            type: 'cta',
            title: "Ready to Grow Your Business?",
            subtitle: "Let's discuss your project and create something amazing together.",
            cta: 'Get Free Consultation',
          },
        ],
        theme: {
          colors: {
            primary: '#6366F1',
            secondary: '#EC4899',
            background: '#FFFFFF',
            text: '#111827'
          },
          fonts: {
            heading: 'Inter',
            body: 'Inter'
          }
        }
      },
    },
    {
      name: 'Professional Services',
      description: 'Ideal for consultants, lawyers, accountants, and other professional services',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Expert Professional Services',
            subtitle: 'Trusted expertise and personalized solutions for your business needs.',
            cta: 'Schedule Consultation',
            backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
          },
          {
            type: 'about',
            title: 'Why Choose Us',
            content: 'With over 15 years of experience, we provide reliable, professional services tailored to your specific needs.',
            features: [
              'Experienced team of professionals',
              'Personalized approach to every client',
              'Proven track record of success',
              'Transparent pricing and communication',
            ],
          },
          {
            type: 'services',
            title: 'Our Services',
            services: [
              {
                title: 'Business Consulting',
                description: 'Strategic advice to help your business grow and succeed',
                icon: 'briefcase',
              },
              {
                title: 'Financial Planning',
                description: 'Expert financial guidance for individuals and businesses',
                icon: 'calculator',
              },
              {
                title: 'Legal Services',
                description: 'Professional legal support for all your business needs',
                icon: 'scale',
              },
            ],
          },
          {
            type: 'contact',
            title: 'Get Started Today',
            subtitle: 'Contact us for a free consultation and see how we can help.',
            cta: 'Contact Us',
          },
        ],
        theme: {
          colors: {
            primary: '#1E40AF',
            secondary: '#059669',
            background: '#FFFFFF',
            text: '#374151'
          },
          fonts: {
            heading: 'Serif',
            body: 'Sans-serif'
          }
        }
      },
    },
    {
      name: 'Creative Portfolio',
      description: 'Showcase your work as a designer, photographer, artist, or creative professional',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Creative Excellence',
            subtitle: 'Bringing ideas to life through innovative design and artistic vision.',
            cta: 'View My Work',
            backgroundImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop',
          },
          {
            type: 'portfolio',
            title: 'Featured Work',
            projects: [
              {
                title: 'Brand Identity Design',
                category: 'Branding',
                image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
              },
              {
                title: 'Website Redesign',
                category: 'Web Design',
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
              },
              {
                title: 'Photography Series',
                category: 'Photography',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
              },
            ],
          },
          {
            type: 'about',
            title: 'About Me',
            content: "I'm a passionate creative professional with 8+ years of experience in design and visual storytelling.",
          },
          {
            type: 'contact',
            title: "Let's Work Together",
            subtitle: 'Ready to bring your vision to life? Get in touch to discuss your project.',
            cta: 'Start Project',
          },
        ],
        theme: {
          colors: {
            primary: '#F59E0B',
            secondary: '#EF4444',
            background: '#FAFAFA',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Modern',
            body: 'Clean'
          }
        }
      },
    },
    {
      name: 'Product Launch',
      description: 'Generate excitement and drive sales for your new product launch',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Introducing the Game Changer',
            subtitle: 'The revolutionary product that will transform how you work, play, and live.',
            cta: 'Pre-Order Now',
            badge: 'Coming Soon',
            backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
          },
          {
            type: 'features',
            title: 'Why You\'ll Love It',
            features: [
              {
                title: 'Innovative Design',
                description: 'Sleek, modern design that fits perfectly into your lifestyle',
                icon: 'sparkles',
              },
              {
                title: 'Advanced Technology',
                description: 'Cutting-edge features powered by the latest technology',
                icon: 'cpu',
              },
              {
                title: 'Premium Quality',
                description: 'Built to last with premium materials and craftsmanship',
                icon: 'star',
              },
            ],
          },
          {
            type: 'countdown',
            title: 'Launch Countdown',
            launchDate: '2024-12-31',
          },
          {
            type: 'pricing',
            title: 'Special Launch Pricing',
            earlyBird: true,
            price: '$199',
            originalPrice: '$299',
            savings: 'Save $100',
          },
          {
            type: 'cta',
            title: 'Don\'t Miss Out!',
            subtitle: 'Be among the first to experience this revolutionary product.',
            cta: 'Reserve Yours Now',
          },
        ],
        theme: {
          colors: {
            primary: '#8B5CF6',
            secondary: '#06B6D4',
            background: '#000000',
            text: '#FFFFFF'
          },
          fonts: {
            heading: 'Bold',
            body: 'Modern'
          }
        }
      },
    },
    {
      name: 'SaaS Startup',
      description: 'Perfect for software companies and SaaS products',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Streamline Your Workflow',
            subtitle: 'The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster.',
            cta: 'Start Free Trial',
            secondaryCta: 'Watch Demo',
            backgroundImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
          },
          {
            type: 'features',
            title: 'Powerful Features',
            subtitle: 'Everything you need to manage your projects efficiently',
            features: [
              {
                title: 'Project Management',
                description: 'Keep track of tasks, deadlines, and team progress',
                icon: 'clipboard',
              },
              {
                title: 'Team Collaboration',
                description: 'Real-time chat, file sharing, and video calls',
                icon: 'users',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Detailed insights into your team\'s productivity',
                icon: 'chart-bar',
              },
            ],
          },
          {
            type: 'pricing',
            title: 'Simple, Transparent Pricing',
            plans: [
              {
                name: 'Starter',
                price: '$9',
                period: '/month',
                features: ['Up to 5 users', 'Basic features', 'Email support'],
              },
              {
                name: 'Professional',
                price: '$29',
                period: '/month',
                features: ['Up to 25 users', 'Advanced features', 'Priority support'],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '$99',
                period: '/month',
                features: ['Unlimited users', 'All features', '24/7 support'],
              },
            ],
          },
          {
            type: 'cta',
            title: 'Ready to Get Started?',
            subtitle: 'Join thousands of teams already using our platform.',
            cta: 'Start Your Free Trial',
          },
        ],
        theme: {
          colors: {
            primary: '#3B82F6',
            secondary: '#10B981',
            background: '#FFFFFF',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Tech',
            body: 'Clean'
          }
        }
      },
    },
    {
      name: 'Restaurant & Food',
      description: 'Delicious designs for restaurants, cafes, and food businesses',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Taste the Extraordinary',
            subtitle: 'Farm-to-table cuisine crafted with passion and served with love in the heart of the city.',
            cta: 'Make Reservation',
            secondaryCta: 'View Menu',
            backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop',
          },
          {
            type: 'menu-highlights',
            title: 'Signature Dishes',
            dishes: [
              {
                name: 'Grilled Salmon',
                description: 'Fresh Atlantic salmon with seasonal vegetables',
                price: '$28',
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop',
              },
              {
                name: 'Ribeye Steak',
                description: 'Prime cut with truffle butter and roasted potatoes',
                price: '$42',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop',
              },
              {
                name: 'Pasta Primavera',
                description: 'House-made pasta with fresh garden vegetables',
                price: '$22',
                image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop',
              },
            ],
          },
          {
            type: 'about',
            title: 'Our Story',
            content: 'Founded in 2015, we\'ve been serving the community with authentic flavors and warm hospitality.',
          },
          {
            type: 'location',
            title: 'Visit Us',
            address: '123 Main Street, Downtown',
            hours: 'Mon-Sun: 5PM - 11PM',
            phone: '(555) 123-4567',
          },
        ],
        theme: {
          colors: {
            primary: '#DC2626',
            secondary: '#F59E0B',
            background: '#FEF7ED',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Elegant',
            body: 'Warm'
          }
        }
      },
    },
    {
      name: 'Fitness & Health',
      description: 'Energize your fitness business with a motivating and professional design',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Transform Your Body, Transform Your Life',
            subtitle: 'Professional fitness coaching and personalized training programs to help you achieve your goals.',
            cta: 'Start Your Journey',
            secondaryCta: 'Free Consultation',
            backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
          },
          {
            type: 'services',
            title: 'Training Programs',
            services: [
              {
                title: 'Personal Training',
                description: 'One-on-one coaching tailored to your fitness level',
                icon: 'user',
              },
              {
                title: 'Group Classes',
                description: 'Fun, energetic classes with like-minded people',
                icon: 'users',
              },
              {
                title: 'Nutrition Coaching',
                description: 'Personalized meal plans and nutrition guidance',
                icon: 'apple',
              },
            ],
          },
          {
            type: 'results',
            title: 'Real Results',
            stats: [
              { number: '500+', label: 'Happy Clients' },
              { number: '2000+', label: 'Pounds Lost' },
              { number: '5+', label: 'Years Experience' },
            ],
          },
          {
            type: 'testimonials',
            title: 'Success Stories',
            testimonials: [
              {
                text: 'Lost 30 pounds and gained confidence I never had before!',
                author: 'Mike Rodriguez',
                result: 'Lost 30 lbs',
              },
            ],
          },
          {
            type: 'cta',
            title: 'Ready to Start?',
            subtitle: 'Your fitness journey begins with a single step.',
            cta: 'Book Free Consultation',
          },
        ],
        theme: {
          colors: {
            primary: '#059669',
            secondary: '#F97316',
            background: '#FFFFFF',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Strong',
            body: 'Athletic'
          }
        }
      },
    },
    {
      name: 'Real Estate',
      description: 'Professional templates for real estate agents and property companies',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Find Your Dream Home',
            subtitle: 'Expert real estate services to help you buy, sell, or invest in properties with confidence.',
            cta: 'Browse Properties',
            secondaryCta: 'Free Market Analysis',
            backgroundImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
          },
          {
            type: 'services',
            title: 'Our Services',
            services: [
              {
                title: 'Home Buying',
                description: 'Find the perfect home with our expert guidance',
                icon: 'home',
              },
              {
                title: 'Home Selling',
                description: 'Get top dollar for your property with our marketing',
                icon: 'dollar-sign',
              },
              {
                title: 'Investment Properties',
                description: 'Build wealth through strategic real estate investments',
                icon: 'trending-up',
              },
            ],
          },
          {
            type: 'featured-properties',
            title: 'Featured Properties',
            properties: [
              {
                title: 'Modern Downtown Condo',
                price: '$450,000',
                beds: '2',
                baths: '2',
                sqft: '1,200',
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
              },
              {
                title: 'Family Suburban Home',
                price: '$650,000',
                beds: '4',
                baths: '3',
                sqft: '2,400',
                image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
              },
            ],
          },
          {
            type: 'about',
            title: 'Why Choose Us',
            content: 'With 15+ years in real estate, we provide expert guidance and personalized service.',
            stats: [
              { number: '500+', label: 'Homes Sold' },
              { number: '$50M+', label: 'In Sales' },
              { number: '15+', label: 'Years Experience' },
            ],
          },
        ],
        theme: {
          colors: {
            primary: '#1E40AF',
            secondary: '#DC2626',
            background: '#FFFFFF',
            text: '#374151'
          },
          fonts: {
            heading: 'Professional',
            body: 'Trustworthy'
          }
        }
      },
    },
    {
      name: 'Local Service Business',
      description: 'Perfect for contractors, plumbers, electricians, and local service providers',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Reliable Local Services',
            subtitle: 'Quality workmanship and exceptional service for your home and business needs.',
            cta: 'Get Free Quote',
            secondaryCta: 'Call Now',
            phone: '(555) 123-4567',
            backgroundImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=600&fit=crop',
          },
          {
            type: 'services',
            title: 'Our Services',
            services: [
              {
                title: 'Emergency Repairs',
                description: '24/7 emergency service when you need it most',
                icon: 'phone',
              },
              {
                title: 'Installations',
                description: 'Professional installation of new systems and fixtures',
                icon: 'tool',
              },
              {
                title: 'Maintenance',
                description: 'Regular maintenance to keep everything running smoothly',
                icon: 'settings',
              },
            ],
          },
          {
            type: 'trust-signals',
            title: 'Why Trust Us',
            signals: [
              'Licensed & Insured',
              '24/7 Emergency Service',
              'Satisfaction Guaranteed',
              'Free Estimates',
              'Local Family Business',
            ],
          },
          {
            type: 'service-area',
            title: 'Service Areas',
            areas: ['Downtown', 'North Side', 'West End', 'Suburbs'],
          },
          {
            type: 'cta',
            title: 'Need Service Today?',
            subtitle: 'Call now for fast, reliable service from local experts.',
            cta: 'Call (555) 123-4567',
            secondaryCta: 'Request Quote',
          },
        ],
        theme: {
          colors: {
            primary: '#DC2626',
            secondary: '#F59E0B',
            background: '#FFFFFF',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Bold',
            body: 'Reliable'
          }
        }
      },
    },
    {
      name: 'Event Planning',
      description: 'Create memorable experiences with elegant event planning templates',
      defaultContent: {
        sections: [
          {
            type: 'hero',
            title: 'Unforgettable Events, Perfectly Planned',
            subtitle: 'From intimate gatherings to grand celebrations, we bring your vision to life with meticulous attention to detail.',
            cta: 'Plan Your Event',
            backgroundImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop',
          },
          {
            type: 'event-types',
            title: 'Events We Plan',
            types: [
              {
                title: 'Weddings',
                description: 'Your perfect day, beautifully orchestrated',
                icon: 'heart',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop',
              },
              {
                title: 'Corporate Events',
                description: 'Professional events that impress',
                icon: 'briefcase',
                image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300&h=200&fit=crop',
              },
              {
                title: 'Birthday Parties',
                description: 'Celebrations as unique as you are',
                icon: 'gift',
                image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop',
              },
            ],
          },
          {
            type: 'process',
            title: 'Our Planning Process',
            steps: [
              {
                step: '1',
                title: 'Consultation',
                description: 'We discuss your vision, budget, and requirements',
              },
              {
                step: '2',
                title: 'Planning',
                description: 'Detailed planning and vendor coordination',
              },
              {
                step: '3',
                title: 'Execution',
                description: 'Flawless event execution on your special day',
              },
            ],
          },
          {
            type: 'portfolio',
            title: 'Recent Events',
            events: [
              {
                title: 'Garden Wedding',
                type: 'Wedding',
                image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=300&fit=crop',
              },
              {
                title: 'Corporate Gala',
                type: 'Corporate',
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
              },
            ],
          },
        ],
        theme: {
          colors: {
            primary: '#EC4899',
            secondary: '#8B5CF6',
            background: '#FDF2F8',
            text: '#1F2937'
          },
          fonts: {
            heading: 'Elegant',
            body: 'Sophisticated'
          }
        }
      },
    },
  ];

  // Insert templates
  for (const template of templates) {
    const existingTemplate = await prisma.template.findFirst({
      where: { name: template.name }
    });
    
    if (!existingTemplate) {
      await prisma.template.create({
        data: template,
      });
      console.log(`✅ Created template: ${template.name}`);
    } else {
      console.log(`⏭️  Template already exists: ${template.name}`);
    }
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