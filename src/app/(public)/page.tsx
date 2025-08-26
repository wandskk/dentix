import React from "react";
import { Header } from "./_components/_header/header";
import { Hero } from "./_components/_hero/index";
import { Main } from "@/components/layout";
import { Professionals } from "./_components/_professionals/professionals";
import { Footer } from "./_components/_footer/index";

export default function Home() {
  return (
    <>
      <Header />

      <Main className="flex flex-col min-h-screen  pt-17">
        <Hero />
        <Professionals />
      </Main>

      <Footer />
    </>
  );
}
