import { HeaderNavigationLinks } from "./headerNavigationLinks";
import { HeaderNavigationHamburguer } from "./headerNavigationHamburguer";

export function HeaderNavigation() {
  return (
    <>
      <HeaderNavigationLinks className="hidden md:flex items-center space-x-4" />

      <HeaderNavigationHamburguer />
    </>
  );
}
