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
import { HeaderNavigationLinks } from "./index";
import React from "react";

export function HeaderNavigationHamburger() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          variant="ghost"
          size="icon"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[280px] sm:w-[320px] z-[9999] bg-white/95 backdrop-blur-md border-l border-gray-200/50">
        <SheetHeader className="border-b border-gray-200/50 pb-4 mb-6">
          <SheetTitle className="text-lg font-semibold text-gray-900">Menu</SheetTitle>
          <SheetDescription className="text-sm text-gray-600">
            Navegue pelos nossos serviços
          </SheetDescription>
        </SheetHeader>

        <HeaderNavigationLinks
          className="flex flex-col items-start space-y-2"
          onItemClick={() => setIsOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
}
