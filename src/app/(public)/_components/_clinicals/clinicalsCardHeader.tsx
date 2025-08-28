import React from "react";
import { ClinicalsCardHeaderProps } from "../_interfaces";

export function ClinicalsCardHeader({
  clinicalName,
  address,
}: ClinicalsCardHeaderProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
        {clinicalName}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {address}
      </p>
    </div>
  );
}
