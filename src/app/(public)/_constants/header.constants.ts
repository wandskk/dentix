import { NavigationLink } from "../_components/_types";

export const HEADER_CONSTANTS = {
  NAVIGATION: {
    LINKS: [
      {
        href: "#profissionais",
        label: "Profissionais",
        title: "Acessar a seção de profissionais",
      },
    ] as NavigationLink[],
    BUTTONS: {
      LOGGED_IN: {
        HREF: "/dashboard",
        LABEL: "Acessar clínica",
        TITLE: "Acessar painel da clínica",
      },
      LOGGED_OUT: {
        HREF: "/login",
        LABEL: "Portal da clínica",
        TITLE: "Entrar no portal da clínica",
      },
    },
  },
};
