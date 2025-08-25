import Link from "next/link";
import { HeaderNavigation } from "./index";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/layout";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <Container className="flex items-center justify-between">
        <Link href="/" title="Acessar a página inicial">
          <Logo />
        </Link>

        <HeaderNavigation />
      </Container>
    </header>
  );
}
