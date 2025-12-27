"use client";

import { useCallback, useRef, useState } from "react";
import Script from "next/script";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ConsultationDialog({
  triggerText = "Schedule meeting",
}: {
  triggerText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyRef = useRef<HTMLDivElement | null>(null);
  const calendlyUrl =
    "https://calendly.com/techura-support/30min?hide_event_type_details=1&hide_gdpr_banner=1";

  const renderCalendly = useCallback(() => {
    if (!isOpen || !calendlyRef.current) return;
    if (!window.Calendly) return;

    calendlyRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url: calendlyUrl,
      parentElement: calendlyRef.current,
    });
  }, [calendlyUrl, isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) {
          renderCalendly();
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="glow" size="lg">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule a meeting</DialogTitle>
          <DialogDescription>
            Pick a time that works for you and we will confirm the details.
          </DialogDescription>
        </DialogHeader>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <div
          ref={calendlyRef}
          className="min-w-[320px] rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5"
          style={{ height: 520 }}
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          onLoad={renderCalendly}
        />
      </DialogContent>
    </Dialog>
  );
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
