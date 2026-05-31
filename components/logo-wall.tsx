import Image from "next/image";
import Link from "next/link";

import { clients } from "@/content/clients";

export function LogoWall() {
  const list = [...clients, ...clients];

  return (
    <div className="space-y-6">
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/60 py-6 dark:bg-white/5">
        <div className="flex w-max animate-marquee items-stretch gap-5 px-6 motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {list.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex w-40 shrink-0 flex-col items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-20 w-full items-center justify-center">
                <Image
                  src={client.logoPath}
                  alt={client.name}
                  width={140}
                  height={70}
                  sizes="140px"
                  className="max-h-16 w-auto max-w-[120px] object-contain"
                />
              </div>
              <p className="mt-3 line-clamp-2 min-h-8 text-xs font-medium leading-4 text-slate-700">
                {client.name}
              </p>
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
