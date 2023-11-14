"use client";
import { Firstpage } from "./firstSection/firstpage";
import { Secondpage } from "./secondSection/secondPage";
import { Thirdpage } from "./thirdSection/thirdPage";
import { FourthPage } from "./fourthPage/fourthPage";
import { FifthPage } from "./fifthSection/fifthPage";
import { Footer } from "./Footer/footer";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}

const container = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0, auto",
  maxWidth: "1155px",
  position: "relative",
  paddingBottom: "140px",
};
export default function RootLayout() {
  return (
    <div style={style}>
      <div style={container}>
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <FourthPage />
        <FifthPage />
        <Footer />
      </div>
    </div>
  );
}
