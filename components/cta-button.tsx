import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  href = "/projects",
  children = "View Projects",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Button variant="outline" size="lg">
        {children}
      </Button>
    </Link>
  );
}
