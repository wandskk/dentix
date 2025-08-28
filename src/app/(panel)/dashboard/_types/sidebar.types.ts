export interface SidebarState {
  isCollapsed: boolean;
  isMobileSheetOpen: boolean;
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
