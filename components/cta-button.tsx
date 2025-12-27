import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WORK_PAGE_ENABLED } from "@/lib/site-flags";

export function PrimaryCTA({
  href = "/contact",
  children = "Book a Free Consultation",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Button variant="glow" size="lg">
        {children}
      </Button>
    </Link>
  );
}

export function SecondaryCTA({
  href = "/work",
  children = "View Work",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  if (!WORK_PAGE_ENABLED) {
    return null;
  }

  return (
    <Link href={href}>
      <Button variant="outline" size="lg">
        {children}
      </Button>
    </Link>
  );
}
