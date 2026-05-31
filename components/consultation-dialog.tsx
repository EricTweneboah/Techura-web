"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/booking";

export function ConsultationDialog({
  triggerText = "Schedule meeting",
}: {
  triggerText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
        <iframe
          title="Schedule a Techura consultation"
          src={bookingUrl}
          className="w-full min-w-[320px] rounded-2xl border border-white/10 bg-white dark:bg-white"
          style={{ height: 520 }}
        />
      </DialogContent>
    </Dialog>
  );
}
