import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarToggle } from "../../_hooks";
import { SidebarToggleButtonProps } from "../../_components/_interfaces/";

export function SidebarToggleButton({ isCollapsed }: SidebarToggleButtonProps) {
  const { handleToggle } = useSidebarToggle();

  return (
    <Button
      onClick={handleToggle}
      className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end cursor-pointer"
    >
      {isCollapsed ? (
        <ChevronRight className="w-12 h-12" />
      ) : (
        <ChevronLeft className="w-12 h-12" />
      )}
    </Button>
  );
}
