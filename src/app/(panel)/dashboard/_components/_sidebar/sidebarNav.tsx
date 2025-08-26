import React from "react";
import { SIDEBAR_CONSTANTS } from "../../_constants";
import { SidebarNavList } from "./sidebarNavList";

export function SidebarNav() {
  const { nav } = SIDEBAR_CONSTANTS;

  return (
    <nav className="flex flex-col gap-2 p-4 py-0">
      <SidebarNavList listLinks={nav} />
    </nav>
  );
}
