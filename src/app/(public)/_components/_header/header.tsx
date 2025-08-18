import Link from "next/link";
import { HeaderNavigation } from "./headerNavigation";
import { Logo } from "@/components/common/logo";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" title="Acessar a página inicial">
          <Logo />
        </Link>

        <HeaderNavigation />
      </div>
    </header>
  );
}
