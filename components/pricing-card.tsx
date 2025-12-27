import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  price,
  bestFor,
  timeline,
  features,
  highlighted,
}: {
  name: string;
  price: string;
  bestFor: string;
  timeline: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <Card
      className={cn(
        "h-full border-white/10 bg-white/60 dark:bg-white/5",
        highlighted && "border-primary/40 shadow-glow"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          {highlighted && <Badge>Most popular</Badge>}
        </div>
        <p className="text-2xl font-semibold">{price}</p>
        <p className="text-sm text-muted-foreground">{bestFor}</p>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <p>Timeline: {timeline}</p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={highlighted ? "glow" : "outline"} className="w-full" asChild>
          <Link href="/contact">Choose {name}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
