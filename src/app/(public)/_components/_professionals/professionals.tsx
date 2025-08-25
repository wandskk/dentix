import { Container, Section } from "@/components/layout";
import { ProfessionalsCard } from "./index";
import React from "react";

export function Professionals() {
  return (
    <Section
      aria-labelledby="professionals-section"
      className="bg-gray-50 py-16"
      id="profissionais"
    >
      <Container className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12">Clínicas disponíveis</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProfessionalsCard />
          <ProfessionalsCard />
          <ProfessionalsCard />
        </div>
      </Container>
    </Section>
  );
}
