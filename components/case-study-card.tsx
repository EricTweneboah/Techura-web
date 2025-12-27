import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CaseStudyCard({
  slug,
  name,
  summary,
  category,
  image,
}: {
  slug: string;
  name: string;
  summary: string;
  category: string[];
  image: string;
}) {
  return (
    <Link href={`/work/${slug}`}>
      <Card className="group overflow-hidden border-white/10 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white/5">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <CardContent className="space-y-3 p-6">
          <div className="flex flex-wrap gap-2">
            {category.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
