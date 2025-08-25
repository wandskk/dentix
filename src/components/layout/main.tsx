import { cn } from "@/lib/utils";
import { CommonProps } from "@/types/components";
import React from "react";

type MainProps = CommonProps & React.HTMLAttributes<HTMLElement>;

export function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cn(className)} {...props}>
      {children}
    </main>
  );
}
