"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { HERO_CONSTANTS } from "../../_constants/hero.contants";

export function HeroFooter() {
  const { footer } = HERO_CONSTANTS;

  return (
    <div className="absolute lg:bottom-20 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white via-white to-transparent">
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <Link href={footer.href} title={footer.title}>
          <ChevronDown className="w-6 h-6 text-emerald-600/60 animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
