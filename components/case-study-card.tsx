import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function CaseStudyCard({
  slug,
  name,
  summary,
  category,
  image,
  logo,
  href,
}: {
  slug: string;
  name: string;
  summary: string;
  category: string[];
  image: string;
  logo?: string;
  href?: string;
}) {
  const content = (
    <Card className="group h-full overflow-hidden border-white/10 bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow dark:bg-white/5">
      <div className="relative flex h-48 w-full items-center justify-center bg-white p-8">
        {logo ? (
          <Image
            src={logo}
            alt={`${name} logo`}
            width={180}
            height={100}
            sizes="180px"
            className="max-h-28 w-auto object-contain"
          />
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
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
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            {name}
            {href ? <ArrowUpRight className="h-4 w-4 text-primary" /> : null}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{summary}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer">
        {content}
      </Link>
    );
  }

  return (
    <div aria-label={`${slug} project`}>
      {content}
    </div>
  );
}
