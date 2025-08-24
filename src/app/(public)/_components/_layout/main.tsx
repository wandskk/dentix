import React from "react";

export function Main({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col min-h-screen  pt-17">{children}</main>;
}
