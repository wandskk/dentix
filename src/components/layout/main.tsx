import { cn } from "@/lib/utils";
import { CommonComponent } from "@/components/interfaces";
import React from "react";

export function Main({ children, className, ...props }: CommonComponent) {
  return (
    <main className={cn(className)} {...props}>
      {children}
    </main>
  );
}
