import { Clinical } from "../_components/_types";

export const CLINICALS_CONSTANTS = {
  SECTION: {
    ID: "clinicals",
    ARIA_LABELLEDBY: "clinicals-section",
    TITLE: "Clínicas disponíveis",
    DESCRIPTION:
      "Encontre a clínica mais próxima de você e agende sua consulta com nossos especialistas",
  },
  CLINICS: [
    {
      clinicalName: "Clínica Centro",
      address: "Rua x, centro, Campo Grande - MS",
      imageSrc: "/foto1.png",
      imageAlt: "Clínica Dentix Centro",
      rating: 4.8,
      reviewCount: 127,
      isOpen: true,
      schedule: "Seg-Sex: 8h às 18h",
      specializations: ["Odontologia", "Ortodontia"],
      href: "/",
    },
    {
      clinicalName: "Clínica Norte",
      address: "Av. Norte, bairro norte, Campo Grande - MS",
      imageSrc: "/foto1.png",
      imageAlt: "Clínica Dentix Norte",
      rating: 4.6,
      reviewCount: 89,
      isOpen: true,
      schedule: "Seg-Sex: 7h às 19h",
      specializations: ["Odontologia", "Implantodontia"],
      href: "/",
    },
    {
      clinicalName: "Clínica Sul",
      address: "Rua Sul, bairro sul, Campo Grande - MS",
      imageSrc: "/foto1.png",
      imageAlt: "Clínica Dentix Sul",
      rating: 4.9,
      reviewCount: 156,
      isOpen: false,
      schedule: "Seg-Sex: 8h às 17h",
      specializations: ["Odontologia", "Endodontia"],
      href: "/",
    },
  ] as Clinical[],
};
