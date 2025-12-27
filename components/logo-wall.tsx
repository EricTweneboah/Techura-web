import Image from "next/image";
import Link from "next/link";

import { clients } from "@/content/clients";

export function LogoWall() {
  const list = [...clients, ...clients];

  return (
    <div className="space-y-6">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 py-6 dark:bg-white/5">
        <div className="flex w-max animate-marquee items-center gap-8 px-6 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {list.map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex items-center justify-center text-muted-foreground">
              <Image
                src={client.logoPath}
                alt={client.name}
                width={140}
                height={60}
                sizes="140px"
                className="h-10 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Add yours next. <Link href="/contact" className="text-primary hover:underline">Start a project</Link>
      </p>
    </div>
  );
}
