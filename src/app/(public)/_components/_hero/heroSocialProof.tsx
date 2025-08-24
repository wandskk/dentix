"use client";

import React from "react";
import { HERO_CONSTANTS } from "../../_constants/hero.contants";

export function HeroSocialProof() {
  const { socialProof } = HERO_CONSTANTS;

  return (
    <div className="flex flex-col items-center lg:items-start space-y-3">
      <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
        {socialProof.title}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600"
              aria-label={`Usuário ${i}`}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="text-center sm:text-left">
          {socialProof.users.map((user) => (
            <div key={user.id}>
              <p className="text-xs sm:text-sm font-medium text-gray-900">
                {user.name}
              </p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
