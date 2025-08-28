import React from "react";
import { SidebarHeader } from "./sidebarHeader";
import { SidebarContent } from "./sidebarContent";
import { SidebarMainContentProps } from "../../_components/_interfaces/";
import clsx from "clsx";

export function SidebarMainContent({
  isCollapsed,
  children,
}: SidebarMainContentProps) {
  return (
    <div
      className={clsx("flex flex-1 flex-col transition-all duration-300", {
        "md:ml-20": isCollapsed,
        "md:ml-64": !isCollapsed,
      })}
    >
      <SidebarHeader />
      <SidebarContent>{children}</SidebarContent>
    </div>
  );
}
