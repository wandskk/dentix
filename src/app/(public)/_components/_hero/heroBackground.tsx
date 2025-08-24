"use client";

import React from "react";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:1rem_1rem] sm:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[800px] xl:w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-100/40 via-teal-100/30 to-cyan-100/40 blur-xl sm:blur-2xl lg:blur-3xl" />
      <div className="absolute top-8 left-4 sm:top-16 sm:left-8 md:top-20 md:left-10 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded-full bg-emerald-200/20 blur-md sm:blur-lg lg:blur-xl animate-pulse" />
      <div className="absolute bottom-8 right-4 sm:bottom-16 sm:right-8 md:bottom-20 md:right-10 h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-40 lg:w-40 rounded-full bg-teal-200/20 blur-md sm:blur-lg lg:blur-xl animate-pulse delay-1000" />
      <div className="absolute right-0 top-1/2 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:hidden -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-100/30 via-teal-100/20 to-cyan-100/30 blur-lg opacity-60" />
    </div>
  );
}
