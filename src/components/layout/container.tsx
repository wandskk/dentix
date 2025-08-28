import { cn } from "@/lib/utils";
import { CommonComponent } from "@/components/interfaces";
import React from "react";

export function Container({ children, className, ...props }: CommonComponent) {
  return (
    <div className={cn("container mx-auto px-4", className)} {...props}>
      {children}
    </div>
  );
}
