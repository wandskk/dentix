"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
import { HERO_CONSTANTS } from "../../_constants/hero.contants";
import { ArrowRight, Star } from "lucide-react";

export function HeroContent() {
  const { title, description, button, badge } = HERO_CONSTANTS;

  return (
    <header className="space-y-6 sm:space-y-8 text-center lg:text-left">
      <Badge
        variant="outline"
        className="bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors text-xs sm:text-sm px-3 py-1.5 sm:px-2.5 sm:py-0.5"
      >
        <Star className="w-3 h-3 mr-2 fill-emerald-500" />
        <span className="hidden sm:inline">{badge.text}</span>
        <span className="sm:hidden">{badge.shortText}</span>
      </Badge>

      <div className="space-y-4 sm:space-y-6">
        <h1
          id="hero-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
        >
          <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
          {description}
        </p>
      </div>

      <nav
        className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
        aria-label="Call to action"
      >
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          <Link
            href={button.href}
            className="flex items-center justify-center gap-2"
            title={button.title}
          >
            {button.label}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
