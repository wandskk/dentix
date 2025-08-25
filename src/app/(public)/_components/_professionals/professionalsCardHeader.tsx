import React from "react";

interface ProfessionalsCardHeaderProps {
  clinicName: string;
  address: string;
}

export function ProfessionalsCardHeader({ clinicName, address }: ProfessionalsCardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{clinicName}</h3>
        <p className="text-sm text-gray-500">{address}</p>
      </div>

      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
    </div>
  );
}
