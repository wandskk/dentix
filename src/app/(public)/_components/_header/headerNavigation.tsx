import { HeaderNavigationLinks } from "./index";
import { HeaderNavigationHamburger } from "./index";

export function HeaderNavigation() {
  return (
    <div className="flex items-center">
      <HeaderNavigationLinks className="hidden md:flex items-center space-x-6" />
      <HeaderNavigationHamburger />
    </div>
  );
}
