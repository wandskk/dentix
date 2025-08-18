"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { HeaderNavigationLinks } from "./headerNavigationLinks";
import React from "react";

export function HeaderNavigationHamburguer() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          className="text-black hover:bg-transparent"
          variant="ghost"
          size="icon"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Veja nossos links</SheetDescription>
        </SheetHeader>

        <HeaderNavigationLinks
          className="flex items-center px-5 space-y-4 "
          onItemClick={() => setIsOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
