import { cn } from "@/lib/utils";
import { CommonProps } from "@/types/components";
import React from "react";

type SectionProps = CommonProps & React.HTMLAttributes<HTMLElement>;

export function Section({ children, ...props }: SectionProps) {
  return (
    <section className={cn(props.className)} {...props}>
      {children}
    </section>
  );
}
