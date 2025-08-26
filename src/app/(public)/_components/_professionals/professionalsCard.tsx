import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {
  ProfessionalsCardImage,
  ProfessionalsCardHeader,
  ProfessionalsCardButton,
  ProfessionalsCardStatus,
  ProfessionalsCardRating,
  ProfessionalsCardSchedule,
} from "./index";

export interface ProfessionalsCardProps {
  clinicName: string;
  address: string;
  imageSrc: string;
  imageAlt: string;
  rating?: number;
  reviewCount?: number;
  isOpen?: boolean;
  schedule?: string;
  href: string;
}

export function ProfessionalsCard({
  clinicName = "Clínica centro",
  address = "Rua x, centro, Campo Grande - MS",
  imageSrc = "/foto1.png",
  imageAlt = "Clínica Dentix",
  rating = 4.8,
  reviewCount = 127,
  isOpen = true,
  schedule = "Seg-Sex: 8h às 18h",
  href = "/",
}: ProfessionalsCardProps) {
  return (
    <Card className="group relative p-0 overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <ProfessionalsCardStatus isOpen={isOpen} />

        <ProfessionalsCardImage src={imageSrc} alt={imageAlt} />

        <div className="p-5 space-y-4">
          <ProfessionalsCardHeader clinicName={clinicName} address={address} />

          <ProfessionalsCardRating rating={rating} reviewCount={reviewCount} />

          <ProfessionalsCardSchedule schedule={schedule} />

          <ProfessionalsCardButton href={href}>
            Agendar horário
          </ProfessionalsCardButton>
        </div>
      </CardContent>
    </Card>
  );
}
