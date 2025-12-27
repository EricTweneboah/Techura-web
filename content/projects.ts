export type Project = {
  slug: string;
  name: string;
  category: string[];
  summary: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  gallery: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "aurora-health",
    name: "Aurora Health Platform",
    category: ["Web", "SaaS"],
    summary: "A patient engagement portal that streamlines scheduling and messaging.",
    problem: "Manual workflows caused long response times and fragmented patient communication.",
    solution: "We designed a secure portal with unified messaging, scheduling, and analytics dashboards.",
    results: ["42% faster response times", "3x increase in appointment completion", "HIPAA-ready architecture"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    gallery: ["/projects/project-1.svg", "/projects/project-2.svg"],
    featured: true,
  },
  {
    slug: "finrise-dashboard",
    name: "Finrise Analytics",
    category: ["Web", "UI/UX"],
    summary: "An executive dashboard for real-time fintech insights.",
    problem: "Leaders lacked a single view of KPIs across products and regions.",
    solution: "We built a role-based analytics hub with live data visualization and alerts.",
    results: ["Single source of truth", "Realtime KPI visibility", "Improved executive reporting"],
    tech: ["React", "TypeScript", "Stripe", "Vercel"],
    gallery: ["/projects/project-2.svg", "/projects/project-3.svg"],
    featured: true,
  },
  {
    slug: "shopway-commerce",
    name: "Shopway Commerce",
    category: ["E-commerce"],
    summary: "A headless Shopify build optimized for conversion.",
    problem: "Legacy storefront slowed down campaigns and SEO performance.",
    solution: "We delivered a headless storefront with optimized checkout and CMS control.",
    results: ["+28% conversion rate", "1.9s average load time", "Flexible content updates"],
    tech: ["Shopify", "Next.js", "Stripe"],
    gallery: ["/projects/project-1.svg", "/projects/project-3.svg"],
    featured: true,
  },
  {
    slug: "fleetline-logistics",
    name: "Fleetline Logistics",
    category: ["Web", "SaaS"],
    summary: "A logistics management suite for distributed teams.",
    problem: "Dispatch and ops teams needed real-time visibility across routes.",
    solution: "We built a multi-tenant control center with route analytics and alerts.",
    results: ["25% fewer dispatch errors", "Live route tracking", "Improved ops collaboration"],
    tech: ["Next.js", "Firebase", "Mapbox"],
    gallery: ["/projects/project-3.svg", "/projects/project-2.svg"],
  },
  {
    slug: "edulift-mobile",
    name: "EduLift Mobile",
    category: ["Mobile", "UI/UX"],
    summary: "A mobile learning app with offline-first experiences.",
    problem: "Learners in low-connectivity areas struggled to complete courses.",
    solution: "We crafted a Flutter app with offline caching and adaptive lesson flows.",
    results: ["60% increase in lesson completion", "Offline access for 80% of content", "Improved retention"],
    tech: ["Flutter", "Firebase", "Figma"],
    gallery: ["/projects/project-1.svg", "/projects/project-2.svg"],
  },
  {
    slug: "nova-saas-mvp",
    name: "Nova SaaS MVP",
    category: ["SaaS", "Web"],
    summary: "A B2B SaaS MVP with billing and audit logs.",
    problem: "The team needed to validate enterprise demand quickly.",
    solution: "We shipped a secure MVP with RBAC, billing, and audit logs in 10 weeks.",
    results: ["MVP launched in 10 weeks", "Enterprise-ready security", "First 5 customers onboarded"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    gallery: ["/projects/project-2.svg", "/projects/project-3.svg"],
  },
];

export const projectCategories = ["Web", "Mobile", "UI/UX", "E-commerce", "SaaS"];
