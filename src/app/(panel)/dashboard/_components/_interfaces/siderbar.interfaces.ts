import { LucideIcon } from "lucide-react";

export interface SidebarDashboardProps {
  children: React.ReactNode;
}

export interface SidebarContentProps {
  children: React.ReactNode;
}

export interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  title: string;
  pathname?: string;
  isCollapsed?: boolean;
}

export interface SidebarAsideProps {
  isCollapsed: boolean;
  children?: React.ReactNode;
}

export interface SidebarMainContentProps {
  isCollapsed: boolean;
  children: React.ReactNode;
}

export interface SidebarToggleButtonProps {
  isCollapsed: boolean;
}
