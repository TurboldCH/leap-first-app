"use client";
import { Footer } from "./Footer/footer";
import { FifthPage } from "./fifthSection/fifthPage";
import { Firstpage } from "./firstSection/firstpage";
import { FourthPage } from "./fourthPage/fourthPage";
import { Secondpage } from "./secondSection/secondPage";
import { Thirdpage } from "./thirdSection/thirdPage";

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
