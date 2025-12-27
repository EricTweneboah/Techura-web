import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";
import { AnimatedBackground } from "@/components/animated-background";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techura",
  url: "https://techura.co.uk",
  logo: "https://techura.co.uk/techura_logo_trans.svg",
  email: "support@techura.co.uk",
  telephone: "+447920693839",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+447920693839",
      contactType: "customer support",
      areaServed: "GB",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+23341773287",
      contactType: "customer support",
      areaServed: "GH",
      availableLanguage: ["en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "High St",
    addressLocality: "Weston-super-Mare",
    postalCode: "BS23 1HL",
    addressCountry: "GB",
  },
  location: [
    {
      "@type": "Place",
      name: "Techura Ghana",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Impact Hub Accra - 1AAP",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Techura | Premium Web & App Development",
    template: "%s | Techura",
  },
  description:
    "Techura is a premium web and app development agency delivering modern websites, SaaS platforms, and mobile apps that convert.",
  metadataBase: new URL("https://techura.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Techura | Premium Web & App Development",
    description:
      "Modern, performance-obsessed web and mobile experiences for ambitious teams.",
    type: "website",
    url: "https://techura.co.uk",
    images: [
      {
        url: "https://techura.co.uk/techura_white_bg.png",
        width: 1200,
        height: 630,
        alt: "Techura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techura | Premium Web & App Development",
    description:
      "Modern, performance-obsessed web and mobile experiences for ambitious teams.",
    images: ["https://techura.co.uk/techura_white_bg.png"],
  },
  icons: {
    icon: "/techura_logo_trans.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} noise min-h-screen font-sans`}>
        <Script id="techura-structured-data" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
