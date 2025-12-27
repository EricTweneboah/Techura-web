import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/section-container";

export default function NotFound() {
  return (
    <SectionContainer className="pt-32 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <Button variant="glow" className="mt-6" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </SectionContainer>
  );
}
