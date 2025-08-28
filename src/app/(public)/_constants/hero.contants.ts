import { HeroStat, SocialProofUser, FloatingElement } from "../_components/_types";

export const HERO_CONSTANTS = {
  title: "Transforme sua clínica odontológica",
  description:
    "Sistema completo de gestão para clínicas odontológicas. Agende consultas, gerencie pacientes, controle financeiro e muito mais em uma plataforma intuitiva e segura.",
  button: {
    label: "Começar agora",
    href: "/#profissionais",
    title: "Começar agora",
  },
  badge: {
    text: "Plataforma #1 em Gestão Odontológica",
    shortText: "#1 em Gestão",
  },
  image: {
    src: "/doctor-hero.png",
    alt: "Profissional de odontologia utilizando sistema de gestão digital",
    width: 500,
    height: 600,
  },
  stats: [
    {
      icon: "Users",
      text: "+500 clínicas ativas",
    },
    {
      icon: "CheckCircle",
      text: "99.9% uptime",
    },
    {
      icon: "Shield",
      text: "LGPD compliant",
    },
  ] as HeroStat[],
  socialProof: {
    title: "Aprovado por profissionais renomados:",
    users: [
      {
        id: 1,
        name: "Dr. Silva & Equipe",
        role: "Clínica Odontológica Premium",
      },
    ] as SocialProofUser[],
  },
  floatingElements: {
    support: {
      text: "24/7",
      subtitle: "Suporte",
    } as FloatingElement,
  },
  footer: {
    href: "/#profissionais",
    title: "Acessar a seção de profissionais",
  },
};
