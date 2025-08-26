import { SidebarLinkProps } from "../_interfaces";
import { SidebarLink } from "./sidebarNavLink";

interface SidebarNavListProps {
  listLinks: SidebarLinkProps[];
}

export function SidebarNavList({
  listLinks,
}: SidebarNavListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {listLinks.map((link) => (
        <li key={link.href}>
          <SidebarLink {...link} />
        </li>
      ))}
    </ul>
  );
}
