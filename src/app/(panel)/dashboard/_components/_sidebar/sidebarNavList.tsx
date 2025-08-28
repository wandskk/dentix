"use client";

import { SidebarLinkProps } from "../_interfaces";
import { SidebarLink } from "./sidebarNavLink";
import { useSidebar } from "../../_hooks";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface SidebarNavListProps {
  listLinks: SidebarLinkProps[];
}

export function SidebarNavList({ listLinks }: SidebarNavListProps) {
  const { isCollapsed } = useSidebar();
  const { isMobile } = useIsMobile();

  return (
    <ul className="flex flex-col gap-2">
      {listLinks.map((link) => (
        <li key={link.href} className="flex flex-col gap-2">
          {link.span && !isCollapsed && !isMobile && (
            <span className="text-sm text-gray-400 font-medium mt-1 uppercase">
              {link.span}
            </span>
          )}
          <SidebarLink {...link} isCollapsed={isCollapsed} />
        </li>
      ))}
    </ul>
  );
}
