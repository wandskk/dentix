import React from "react";
import { Clock } from "lucide-react";
import { ClinicalsCardScheduleProps } from "../_interfaces";

export function ClinicalsCardSchedule({
  schedule,
}: ClinicalsCardScheduleProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <Clock className="w-4 h-4 text-gray-500" />
      <span>{schedule}</span>
    </div>
  );
}
