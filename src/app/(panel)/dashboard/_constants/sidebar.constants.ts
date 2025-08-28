import { Banknote, CalendarCheck2, Folder, Settings } from "lucide-react";

export const SIDEBAR_CONSTANTS = {
  nav: [
    {
      span: "Painel",
      href: "/dashboard",
      icon: CalendarCheck2,
      label: "Dashboard",
      title: "Acessar dashboard",
    },
    {
      href: "/dashboard/services",
      icon: Folder,
      label: "Serviços",
      title: "Acessar serviços",
    },
    {
      span: "Minha conta",
      href: "/dashboard/profile",
      icon: Settings,
      label: "Meu perfil",
      title: "Acessar meu perfil",
    },
    {
      href: "/dashboard/plans",
      icon: Banknote,
      label: "Planos",
      title: "Acessar planos",
    },
  ],
};
