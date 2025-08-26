import React from "react";
import { Logo } from "@/components/common/logo";
import { SidebarToggleButton } from "./sidebarToggleButton";
import { SidebarAsideProps } from "../../_components/_interfaces/";
import clsx from "clsx";

export function SidebarAside({ isCollapsed, children }: SidebarAsideProps) {
  return (
    <aside
      className={clsx(
        "flex flex-col border-r bg-background transition-all duration-300 p-4 h-full",
        {
          "w-20": isCollapsed,
          "w-64": !isCollapsed,
          "hidden md:flex md:fixed": true,
        }
      )}
    >
      <div
        className={clsx("flex gap-4 items-center justify-between", {
          "justify-center": isCollapsed,
        })}
      >
        {!isCollapsed && <Logo />}
        <SidebarToggleButton isCollapsed={isCollapsed} />
      </div>
      {children}
    </aside>
  );
}
