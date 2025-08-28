import Image from "next/image";
import React from "react";
import { ClinicalsCardImageProps } from "../_interfaces";

export function ClinicalsCardImage({ src, alt }: ClinicalsCardImageProps) {
  return (
    <div className="relative w-full h-52 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}
