import React from "react";
import { Main } from "@/components/layout";
import { CommonComponent } from "@/components/interfaces";

export function SidebarContent({ children }: CommonComponent) {
  return <Main className="flex-1 py-4 px-2">{children}</Main>;
}
