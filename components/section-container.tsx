import { cn } from "@/lib/utils";

export function SectionContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("container py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
