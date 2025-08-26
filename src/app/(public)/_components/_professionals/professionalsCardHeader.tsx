import React from "react";

interface ProfessionalsCardHeaderProps {
  clinicName: string;
  address: string;
}

export function ProfessionalsCardHeader({ clinicName, address }: ProfessionalsCardHeaderProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
        {clinicName}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {address}
      </p>
    </div>
  );
}
