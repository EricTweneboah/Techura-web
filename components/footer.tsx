import Image from "next/image";
import Link from "next/link";

import { WORK_PAGE_ENABLED } from "@/lib/site-flags";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container grid gap-8 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
              <Image src="/techura_logo_trans.svg" alt="Techura" width={28} height={28} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Techura</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Techura builds premium digital products for ambitious teams. We design,
            develop, and scale web and mobile experiences that drive growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p className="font-medium">Company</p>
            <Link href="/about" className="block text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/services" className="block text-muted-foreground hover:text-foreground">
              Services
            </Link>
            {WORK_PAGE_ENABLED ? (
              <Link href="/work" className="block text-muted-foreground hover:text-foreground">
                Work
              </Link>
            ) : null}
            <Link href="/pricing" className="block text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Legal</p>
            <Link href="/legal/privacy" className="block text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="block text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/contact" className="block text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">Let us build your next product</p>
          <p className="mt-2 text-sm text-muted-foreground">
            support@techura.co.uk | UK +44 (7920 693839) | Ghana +233 (4177 3287)
          </p>
          <p className="mt-2 text-sm text-muted-foreground">  
            UK - We Are Super (High St, Weston-super-Mare BS23 1HL)
            GHANA - Impact Hub Accra - 1AAP


          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-muted-foreground">
          (c) {new Date().getFullYear()} Techura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
