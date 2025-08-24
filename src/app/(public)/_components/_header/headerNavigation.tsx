import { HeaderNavigationLinks } from "./index";
import { HeaderNavigationHamburger } from "./index";

export function HeaderNavigation() {
  return (
    <>
      <HeaderNavigationLinks className="hidden md:flex items-center space-x-4" />

      <HeaderNavigationHamburger />
    </>
  );
}
