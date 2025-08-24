import React from "react";
import { Header } from "./_components/_header/header";
import { Hero } from "./_components/_hero/index";
import { Main } from "./_components/_layout/main";

export default function Home() {
  return (
    <>
      <Header />
      
      <Main>
        <Hero />
      </Main>
    </>
  );
}
