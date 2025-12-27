import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group border-white/10 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow dark:bg-white/5",
        className
      )}
    >
      <CardContent className="space-y-3 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
