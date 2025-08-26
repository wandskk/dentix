import React from "react";
import { ReduxProvider } from "./_store";
import { SidebarDashboard } from "./_components/_sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <SidebarDashboard>{children}</SidebarDashboard>
    </ReduxProvider>
  );
}
