export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: "authentication",
    name: "Authentication",
    description: "User authentication, authorization, and identity management solutions",
    icon: "🔐",
  },
  {
    slug: "payments",
    name: "Payments & Billing",
    description: "Payment processing, subscription management, and billing solutions",
    icon: "💳",
  },
  {
    slug: "database",
    name: "Databases",
    description: "Managed databases, ORMs, and data storage solutions",
    icon: "🗄️",
  },
  {
    slug: "hosting",
    name: "Hosting & Deployment",
    description: "Cloud hosting, deployment platforms, and serverless infrastructure",
    icon: "☁️",
  },
  {
    slug: "email",
    name: "Email Services",
    description: "Transactional email, email marketing, and deliverability tools",
    icon: "📧",
  },
  {
    slug: "ai",
    name: "AI & Machine Learning",
    description: "AI APIs, model hosting, and machine learning platforms",
    icon: "🤖",
  },
  {
    slug: "analytics",
    name: "Analytics & Monitoring",
    description: "Privacy-friendly analytics, error tracking, and performance monitoring",
    icon: "📊",
  },
  {
    slug: "ui",
    name: "UI & Design Systems",
    description: "Component libraries, CSS frameworks, and design tools",
    icon: "🎨",
  },
  {
    slug: "cms",
    name: "CMS & Content",
    description: "Headless CMS, blog engines, and content management platforms",
    icon: "📝",
  },
  {
    slug: "boilerplate",
    name: "Boilerplates & Starter Kits",
    description: "SaaS templates, starter kits, and project boilerplates",
    icon: "🚀",
  },
  {
    slug: "storage",
    name: "Storage & CDN",
    description: "File storage, image optimization, and content delivery networks",
    icon: "📦",
  },
  {
    slug: "marketing",
    name: "Marketing & SEO",
    description: "SEO tools, email marketing, social media, and growth tools",
    icon: "📣",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
