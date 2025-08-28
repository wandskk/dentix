"use client";

import React from "react";
import { HERO_CONSTANTS } from "../../_constants/hero.contants";
import { CheckCircle, Shield, Users } from "lucide-react";

const iconMap = {
  Users,
  CheckCircle,
  Shield,
};

export function HeroStats() {
  const { stats } = HERO_CONSTANTS;

  return (
    <dl className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon as keyof typeof iconMap];

        return (
          <div
            key={index}
            className="flex items-center justify-center sm:justify-start gap-2"
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
            <span>{stat.text}</span>
          </div>
        );
      })}
    </dl>
  );
}
