import { cn } from "@/lib/utils";
import Link from "next/link";
import { HEADER_CONSTANTS } from "../../_constants/header.constants";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface HeaderNavigationLinksProps {
  className?: string;
  onItemClick?: () => void;
}

export function HeaderNavigationLinks({
  className,
  onItemClick,
}: HeaderNavigationLinksProps) {
  const { LINKS, BUTTONS } = HEADER_CONSTANTS.NAVIGATION;
  const session = false;

  return (
    <nav className={cn(className)} aria-label="Navegação" role="navigation">
      <ul className="flex flex-col items-center gap-4 flex-wrap md:flex-row w-100 justify-end">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              title={link.title}
              onClick={onItemClick}
              className="text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}

        <li>
          {session ? (
            <Link
              href={BUTTONS.LOGGED_IN.HREF}
              title={BUTTONS.LOGGED_IN.TITLE}
              onClick={onItemClick}
              className="text-base"
            >
              {BUTTONS.LOGGED_IN.LABEL}
            </Link>
          ) : (
            <Button asChild>
              <Link
                href={BUTTONS.LOGGED_OUT.HREF}
                title={BUTTONS.LOGGED_OUT.TITLE}
                onClick={onItemClick}
                className="text-base"
              >
                <LogIn className="w-4 h-4" />
                {BUTTONS.LOGGED_OUT.LABEL}
              </Link>
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}
