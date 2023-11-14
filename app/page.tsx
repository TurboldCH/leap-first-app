"use client";
import { Firstpage } from "./firstSection/firstpage";
import { Secondpage } from "./secondSection/secondPage";
import { useState } from "react";
import { Thirdpage } from "./thirdSection/thirdPage";
import { FourthPage } from "./fourthPage/fourthPage";
import { FifthPage } from "./fifthSection/fifthPage";
import { Footer } from "./Footer/footer";

export default function RootLayout() {
  return (
    <div>
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </div>
  );
}
