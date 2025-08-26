import { cn } from "@/lib/utils/utils";
import { CommonProps } from "@/types/components";
import React from "react";

type ContainerProps = CommonProps & React.HTMLAttributes<HTMLDivElement>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)} {...props}>
      {children}
    </div>
  );
}
