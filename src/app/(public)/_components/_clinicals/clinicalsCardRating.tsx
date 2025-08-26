import React from "react";
import { Star } from "lucide-react";
import { ClinicalsCardRatingProps } from "../_interfaces";

export function ClinicalsCardRating({
  rating,
  reviewCount,
}: ClinicalsCardRatingProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
        <span className="font-medium text-gray-900 dark:text-white">
          {rating}
        </span>
      </div>
      <span className="text-gray-500">({reviewCount} avaliações)</span>
    </div>
  );
}
