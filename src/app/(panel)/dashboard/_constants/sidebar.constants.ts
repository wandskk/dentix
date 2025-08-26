import { Banknote, CalendarCheck2, Folder, Settings } from "lucide-react";

export const SIDEBAR_CONSTANTS = {
  nav: [
    {
      href: "/dashboard",
      icon: CalendarCheck2,
      label: "Agendamentos",
      title: "Acessar agendamentos",
    },
    {
      href: "/dashboard/services",
      icon: Folder,
      label: "Serviços",
      title: "Acessar serviços",
    },
    {
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
