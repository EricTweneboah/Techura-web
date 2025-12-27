import { SectionContainer } from "@/components/section-container";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return (
    <SectionContainer className="pt-20">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
    </SectionContainer>
  );
}
