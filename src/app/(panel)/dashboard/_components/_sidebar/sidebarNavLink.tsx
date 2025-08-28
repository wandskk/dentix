"use client";

import React from "react";
import Link from "next/link";
import { SidebarLinkProps } from "../_interfaces";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function SidebarLink({
  href,
  icon: Icon,
  label,
  title,
  isCollapsed,
}: SidebarLinkProps) {
  const pathname = usePathname();
  const isCurrentPathname = pathname === href;

  return (
    <Link
      href={href}
      title={title}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 rounded-md text-black transition-colors",
        { "bg-blue-500 text-white": isCurrentPathname },
        { "hover:bg-gray-100 text-gray-700": !isCurrentPathname }
      )}
    >
      <div className="flex items-center gap-2">
        <span className="w-6 h-6">
          <Icon />
        </span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}
