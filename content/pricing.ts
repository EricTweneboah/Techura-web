export const pricingPackages = [
  {
    name: "Starter",
    price: "From £500",
    bestFor: "Small business websites",
    timeline: "1-2 weeks",
    features: [
      "Custom design + UX",
      "Up to 8 core pages",
      "CMS setup",
      "SEO + performance foundations",
      "Launch support",
    ],
  },
  {
    name: "Growth",
    price: "From £5,000",
    bestFor: "Web apps or e-commerce",
    timeline: "4-6 weeks",
    features: [
      "Product discovery workshops",
      "Design system",
      "Advanced CMS or Shopify",
      "Integrations + analytics",
      "QA + performance tuning",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "From £10,000",
    bestFor: "SaaS MVPs or mobile apps",
    timeline: "8-10 weeks",
    features: [
      "MVP strategy + roadmap",
      "Auth + RBAC",
      "API integrations",
      "Data dashboards",
      "Launch + growth support",
    ],
  },
];

export const pricingComparison = [
  {
    feature: "Custom UI/UX",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    feature: "CMS or Admin",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    feature: "E-commerce or Billing",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Mobile app build",
    starter: false,
    growth: false,
    scale: true,
  },
  {
    feature: "Enterprise security",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    feature: "Dedicated PM",
    starter: false,
    growth: true,
    scale: true,
  },
];
