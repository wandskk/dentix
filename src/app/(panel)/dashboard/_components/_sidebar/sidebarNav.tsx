import React from "react";
import { SIDEBAR_CONSTANTS } from "../../_constants";
import { SidebarNavList } from "./sidebarNavList";
import clsx from "clsx";

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const { nav } = SIDEBAR_CONSTANTS;

  return (
    <nav className={clsx("flex flex-col gap-2", className)}>
      <SidebarNavList listLinks={nav} />
    </nav>
  );
}
