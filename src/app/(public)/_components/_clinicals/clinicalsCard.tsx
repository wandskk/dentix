import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import {
  ClinicalsCardImage,
  ClinicalsCardHeader,
  ClinicalsCardButton,
  ClinicalsCardStatus,
  ClinicalsCardRating,
  ClinicalsCardSchedule,
} from "./index";
import { ClinicalsCardProps } from "../_interfaces/index";

export function ClinicalsCard({
  clinicalName,
  address,
  imageSrc,
  imageAlt,
  rating,
  reviewCount,
  isOpen,
  schedule,
  href,
}: ClinicalsCardProps) {
  return (
    <Card className="group relative p-0 overflow-hidden border-0 bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl hover:-translate-y-1">
      <CardContent className="p-0">
        <ClinicalsCardStatus isOpen={isOpen} />

        <ClinicalsCardImage src={imageSrc} alt={imageAlt} />

        <div className="p-5 space-y-4">
          <ClinicalsCardHeader clinicalName={clinicalName} address={address} />

          <ClinicalsCardRating rating={rating} reviewCount={reviewCount} />

          <ClinicalsCardSchedule schedule={schedule} />

          <ClinicalsCardButton href={href}>Agendar horário</ClinicalsCardButton>
        </div>
      </CardContent>
    </Card>
  );
}
