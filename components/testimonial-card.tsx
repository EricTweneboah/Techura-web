import { Card, CardContent } from "@/components/ui/card";

export function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <Card className="border-white/10 bg-white/60 dark:bg-white/5">
      <CardContent className="space-y-4 p-6">
        <p className="text-sm text-muted-foreground">&quot;{quote}&quot;</p>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}
