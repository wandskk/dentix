import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import { ProfessionalsCardImage } from "./professionalsCardImage";
import { ProfessionalsCardHeader } from "./professionalsCardHeader";
import { ProfessionalsCardButton } from "./professionalsCardButton";

export function ProfessionalsCard() {
  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="p-0">
        <ProfessionalsCardImage 
          src="/foto1.png" 
          alt="Dentix logo" 
        />

        <div className="p-4 space-y-4">
          <ProfessionalsCardHeader
            clinicName="Clínica centro"
            address="Rua x, centro, Campo Grande - MS"
          />

          <ProfessionalsCardButton href="/">
            Agendar horário
          </ProfessionalsCardButton>
        </div>
      </CardContent>
    </Card>
  );
}
