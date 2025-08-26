import { Container, Section } from "@/components/layout";
import { ProfessionalsCard } from "./index";
import { PROFESSIONALS_CONSTANTS } from "../../_constants";
import React from "react";

export function Professionals() {
  return (
    <Section
      aria-labelledby={PROFESSIONALS_CONSTANTS.SECTION.ARIA_LABELLEDBY}
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20"
      id={PROFESSIONALS_CONSTANTS.SECTION.ID}
    >
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {PROFESSIONALS_CONSTANTS.SECTION.TITLE}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {PROFESSIONALS_CONSTANTS.SECTION.DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONALS_CONSTANTS.CLINICS.map((clinic, index) => (
            <ProfessionalsCard key={index} {...clinic} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
