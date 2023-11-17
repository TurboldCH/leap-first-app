"use client";
import { Firstpage } from "./firstSection/firstpage";
import { Secondpage } from "./secondSection/secondPage";
import { Thirdpage } from "./thirdSection/thirdPage";
import { FourthPage } from "./fourthPage/fourthPage";
import { FifthPage } from "./fifthSection/fifthPage";
import { Footer } from "./Footer/footer";
import { styled } from "@mui/material";

const DivStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function RootLayout() {
  return (
    <DivStyle>
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </DivStyle>
  );
}
