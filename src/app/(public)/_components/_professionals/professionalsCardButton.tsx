import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ProfessionalsCardButtonProps {
  href: string;
  children: React.ReactNode;
}

export function ProfessionalsCardButton({ href, children }: ProfessionalsCardButtonProps) {
  return (
    <Button
      asChild
      className="w-full bg-emerald-500 hover:bg-emerald-400 py-2 rounded-md"
    >
      <Link
        href={href}
        className="flex items-center justify-center text-sm md:text-base font-medium text-white"
      >
        {children}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </Button>
  );
}
