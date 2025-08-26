"use client";

import React from "react";
import { SidebarAside } from "./sidebarAside";
import { SidebarMainContent } from "./sidebarMainContent";
import { SidebarDashboardProps } from "../_interfaces";
import { useSidebar } from "../../_hooks";

export function SidebarDashboard({ children }: SidebarDashboardProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex min-h-screen w-full">
      <SidebarAside isCollapsed={isCollapsed} />
      <SidebarMainContent isCollapsed={isCollapsed}>
        {children}
      </SidebarMainContent>
    </div>
  );
}
