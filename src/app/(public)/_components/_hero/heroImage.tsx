"use client";

import Image from "next/image";
import React from "react";
import { HERO_CONSTANTS } from "../../_constants/hero.contants";

export function HeroImage() {
  const { image, floatingElements } = HERO_CONSTANTS;

  return (
    <figure className="relative order-first lg:order-last hidden lg:block">
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto object-contain drop-shadow-2xl"
          priority
          quality={95}
        />

        <div className="absolute bottom-2 left-2 bg-emerald-600 text-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg sm:shadow-xl z-20">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold">
              {floatingElements.support.text}
            </div>
            <div className="text-xs opacity-90">
              {floatingElements.support.subtitle}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl sm:blur-3xl scale-125 sm:scale-150" />
      </div>
    </figure>
  );
}
