import { timeUtils } from "@/lib/utils/time";
import { FOOTER_CONSTANTS } from "../../_constants";
import Link from "next/link";
import React from "react";

export async function Footer() {
  const { getFullYear } = timeUtils;

  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-gray-600 sm:text-base">
            {FOOTER_CONSTANTS.text} {getFullYear()} -{" "}
            <Link
              className="font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
              href={FOOTER_CONSTANTS.developer.linkedinUrl}
              title={FOOTER_CONSTANTS.developer.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FOOTER_CONSTANTS.developer.name}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
