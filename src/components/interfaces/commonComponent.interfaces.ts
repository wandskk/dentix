import React, { HTMLAttributes } from "react";

export interface CommonComponent
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "className"> {
  children?: React.ReactNode;
  className?: string | string[];
}
