import React from "react";
import { ClinicalsCardStatusProps } from "../_interfaces";

export function ClinicalsCardStatus({ isOpen }: ClinicalsCardStatusProps) {
  return (
    <div className="absolute top-3 right-3 z-10">
      <div
        className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${
          isOpen
            ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
            : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200"
        }`}
      >
        {isOpen ? "Aberto" : "Fechado"}
      </div>
    </div>
  );
}
