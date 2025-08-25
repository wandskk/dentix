import Image from "next/image";
import React from "react";

interface ProfessionalsCardImageProps {
  src: string;
  alt: string;
}

export function ProfessionalsCardImage({
  src,
  alt,
}: ProfessionalsCardImageProps) {
  return (
    <div className="relative w-full h-48">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100%, (max-width: 1200px) 120px, 150px"
        className="object-cover"
        priority
      />
    </div>
  );
}
