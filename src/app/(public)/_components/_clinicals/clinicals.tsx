import { Container, Section } from "@/components/layout";
import { ClinicalsCard } from "./index";
import { CLINICALS_CONSTANTS } from "../../_constants";
import React from "react";

export function Clinicals() {
  return (
    <Section
      aria-labelledby={CLINICALS_CONSTANTS.SECTION.ARIA_LABELLEDBY}
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20"
      id={CLINICALS_CONSTANTS.SECTION.ID}
    >
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {CLINICALS_CONSTANTS.SECTION.TITLE}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {CLINICALS_CONSTANTS.SECTION.DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CLINICALS_CONSTANTS.CLINICS.map((clinical, index) => (
            <ClinicalsCard key={index} {...clinical} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
