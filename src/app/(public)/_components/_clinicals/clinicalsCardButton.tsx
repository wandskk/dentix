import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ClinicalsCardButtonProps } from "../_interfaces";

export function ClinicalsCardButton({
  href,
  children,
}: ClinicalsCardButtonProps) {
  return (
    <Button
      asChild
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 group/button"
    >
      <Link
        href={href}
        className="flex items-center justify-center text-sm md:text-base"
      >
        {children}
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/button:translate-x-1" />
      </Link>
    </Button>
  );
}
