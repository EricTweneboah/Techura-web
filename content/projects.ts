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
  logoPath: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hefra-licensing",
    name: "HeFRA Licensing Portal",
    category: ["Government", "Web", "SaaS"],
    summary: "A secure health facility licensing system with approvals, certificates, QR verification, and audit logging.",
    problem: "Health facility licensing needed a more transparent digital workflow for reviews, approvals, renewals, and verification.",
    solution: "We built a role-based portal for application management, certificate generation, QR-based validation, and administrative oversight.",
    results: ["Role-based approval workflows", "Digital certificate generation", "QR verification and audit logging"],
    tech: ["TypeScript", "Next.js", "Firebase"],
    gallery: ["/logos/HeFRA-LOGO.png"],
    logoPath: "/logos/HeFRA-LOGO.png",
    featured: true,
  },
  {
    slug: "tess-app",
    name: "TESS App",
    category: ["Mobile", "Healthcare"],
    summary: "A patient-centered entertainment and therapy companion for seniors and memory-care patients.",
    problem: "Care teams needed a gentle digital companion to support cognitive engagement and meaningful patient interaction.",
    solution: "We developed a Flutter app experience focused on accessible media, therapy prompts, and senior-friendly interaction patterns.",
    results: ["Senior-friendly mobile experience", "Therapy companion workflows", "Built for memory-care environments"],
    tech: ["Flutter", "Dart", "Firebase"],
    gallery: ["/logos/TESS APP.png"],
    logoPath: "/logos/TESS APP.png",
    featured: true,
  },
  {
    slug: "dzadze",
    name: "Dzadze",
    category: ["Government", "Web", "SaaS"],
    summary: "A multi-tenant food vendor certification and public health compliance platform for municipal assemblies in Ghana.",
    problem: "Municipal food vendor certification needed a structured system for records, compliance checks, and public health workflows.",
    solution: "We designed a multi-tenant platform that helps assemblies manage vendor certification and health compliance processes.",
    results: ["Multi-tenant assembly support", "Vendor certification workflows", "Public health compliance tooling"],
    tech: ["Flutter", "Dart", "Firebase"],
    gallery: ["/logos/dzadze website logo.png"],
    logoPath: "/logos/dzadze website logo.png",
    featured: true,
  },
  {
    slug: "mifarm",
    name: "miFARM",
    category: ["Mobile", "Web", "Agritech"],
    summary: "An all-in-one smart farming app built for mobile and web platforms.",
    problem: "Farmers and agribusiness teams needed one place to manage digital farm activity across devices.",
    solution: "We built a cross-platform farming product with a consistent app experience across iOS, Android, web, and desktop targets.",
    results: ["Cross-platform Flutter build", "Smart farming product experience", "Responsive web app presence"],
    tech: ["Flutter", "Dart", "Firebase"],
    gallery: ["/logos/mifarms app.png"],
    logoPath: "/logos/mifarms app.png",
    href: "https://www.mifarms.app",
  },
  {
    slug: "stillpoint-coaching",
    name: "Stillpoint Coaching",
    category: ["Website", "Brand"],
    summary: "A modern coaching brand site for women navigating life transitions.",
    problem: "The brand needed a calming digital home for services, packages, groups, and waitlist interest.",
    solution: "We delivered a responsive website with a warm brand system, conversion-focused content, and clear service pathways.",
    results: ["Responsive coaching website", "Services and packages structure", "Waitlist-ready user journey"],
    tech: ["HTML", "CSS", "JavaScript"],
    gallery: ["/logos/stillpoint coaching.png"],
    logoPath: "/logos/stillpoint coaching.png",
    href: "https://erictweneboah.github.io/STILLPOINT/",
    featured: true,
  },
  {
    slug: "we-care-for-you",
    name: "We Care For You Foundation",
    category: ["Website", "Nonprofit"],
    summary: "A community charity website for programmes, causes, volunteering, and donations.",
    problem: "The foundation needed a trusted online presence to communicate its mission and connect supporters to action.",
    solution: "We built a polished nonprofit website with structured content for causes, past projects, volunteering, and donations.",
    results: ["Mission-led nonprofit website", "Donation and volunteer pathways", "Past projects showcase"],
    tech: ["Website", "Responsive Design"],
    gallery: ["/logos/we care logo.png"],
    logoPath: "/logos/we care logo.png",
    href: "https://www.wecareforyough.org",
  },
  {
    slug: "truselv-care",
    name: "TruSelv Care",
    category: ["Website", "Healthcare"],
    summary: "A healthcare landing page for intelligent software and devices that support patients and staff.",
    problem: "The care product needed a focused landing experience that explained its patient, staff, and compliance value clearly.",
    solution: "We created a modern healthcare site with strong hero messaging, product sections, and partnership calls to action.",
    results: ["Healthcare product landing page", "Patient and staff value messaging", "Partner enquiry flow"],
    tech: ["Website", "Responsive Design"],
    gallery: ["/logos/Truselv care landing.png"],
    logoPath: "/logos/Truselv care landing.png",
    href: "https://www.truselv.co.uk/care",
  },
  {
    slug: "truselv-home-improvements",
    name: "TruSelv Home Improvements",
    category: ["Website", "Services"],
    summary: "A clean home improvements website for fittings, garden upgrades, shower panels, and deep cleaning.",
    problem: "The service needed a clear web presence that could present offers and make quote requests easy.",
    solution: "We built a bright responsive website with service navigation, strong calls to action, and a practical quote journey.",
    results: ["Service-led landing page", "Quote request pathway", "Responsive home services design"],
    tech: ["Website", "Responsive Design"],
    gallery: ["/logos/truselv home improvements landing.png"],
    logoPath: "/logos/truselv home improvements landing.png",
    href: "https://www.truselv.co.uk/home-improvements",
  },
  {
    slug: "bedboard",
    name: "Bedboard",
    category: ["Healthcare", "Product"],
    summary: "A 20-inch digital bedside display concept designed to improve hospital communication and care workflows.",
    problem: "Patient rooms needed clearer bedside information that could support staff, patients, and families without adding workflow friction.",
    solution: "We shaped the Bedboard product concept around visible patient information, care coordination, and hospital-ready communication.",
    results: ["Digital bedside display concept", "Hospital workflow focus", "Patient communication design"],
    tech: ["Product Design", "Healthcare UX"],
    gallery: ["/logos/Bedboard.png"],
    logoPath: "/logos/Bedboard.png",
  },
  {
    slug: "ghana-government",
    name: "Ghana Government Digital Services",
    category: ["Government", "Web"],
    summary: "Government-facing digital service work supporting public sector compliance and licensing workflows.",
    problem: "Public sector services needed reliable digital interfaces for regulated operational processes.",
    solution: "We supported government-aligned platform delivery with secure, structured workflows and clear administrative interfaces.",
    results: ["Public sector workflow support", "Regulated service delivery", "Administrative UX"],
    tech: ["Web", "Digital Services"],
    gallery: ["/logos/ghana coats of arms.png"],
    logoPath: "/logos/ghana coats of arms.png",
  },
];

export const projectCategories = ["Web", "Mobile", "Website", "Healthcare", "Government", "SaaS"];
