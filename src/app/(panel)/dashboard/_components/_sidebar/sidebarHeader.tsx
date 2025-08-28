"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { SidebarNav } from "./sidebarNav";
import { useSidebar } from "../../_hooks";

export function SidebarHeader() {
  const { isMobileSheetOpen, openMobileSheet, closeMobileSheet } = useSidebar();

  return (
    <header className="md:hidden flex items-center justify-between border-b px-4 h-14 z-10 sticky top-0 bg-white">
      <div className="flex items-center gap-4">
        <Sheet
          open={isMobileSheetOpen}
          onOpenChange={(open) =>
            open ? openMobileSheet() : closeMobileSheet()
          }
        >
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={openMobileSheet}
            >
              <List className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="z-[10000] sm:max-w-xs text-black">
            <SheetHeader>
              <SheetTitle>Menu Dentix</SheetTitle>
              <SheetDescription>Menu administrativo</SheetDescription>
            </SheetHeader>

            <SidebarNav className=" p-4 py-0" />
          </SheetContent>
        </Sheet>

        <Logo />
      </div>
    </header>
  );
}
