"use client";
import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
// import "./globals.css";
import { Firstpage } from "./firstSection/firstpage";
import { Secondpage } from "./secondSection/secondPage";
import { useState } from "react";
import { Thirdpage } from "./thirdSection/thirdPage";
import { FourthPage } from "./fourthPage/fourthPage";
import { FifthPage } from "./fifthSection/fifthPage";
import { Footer } from "./Footer/footer";

const inter = Inter({ subsets: ["latin"] });

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* {show ? <Firstpage /> : null}
      <button onClick={() => setShow(!show)}>Click!</button> */}
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </div>
  );
}
