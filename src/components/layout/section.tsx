import { cn } from "@/lib/utils";
import { CommonComponent } from "@/components/interfaces";
import React from "react";

export function Section({ children, className, ...props }: CommonComponent) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  );
}
