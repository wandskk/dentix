import Link from "next/link";
import { HeaderNavigation } from "./index";
import { Logo } from "@/components/common/logo";
import { Container } from "@/components/layout";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-[999] bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <Container className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          title="Acessar a página inicial"
          className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
        >
          <Logo />
        </Link>

        <HeaderNavigation />
      </Container>
    </header>
  );
}
