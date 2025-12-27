"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
].filter((link) => WORK_PAGE_ENABLED || link.href !== "/work");

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
            <Image src="/techura_logo_trans.svg" alt="Techura" width={28} height={28} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Techura</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn("rounded-full border border-white/10")}
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </Button>
          {WORK_PAGE_ENABLED ? (
            <Link href="/work" className="hidden md:inline-flex">
              <Button variant="outline" size="sm">
                View Work
              </Button>
            </Link>
          ) : null}
          <ConsultationDialog triggerText="Schedule meeting" />
        </div>
      </div>
    </header>
  );
}
