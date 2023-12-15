"use client";
import { Firstpage } from "./firstSection/firstpage";
import { Secondpage } from "./secondSection/secondPage";
import { Thirdpage } from "./thirdSection/thirdPage";
import { FourthPage } from "./fourthPage/fourthPage";
import { FifthPage } from "./fifthSection/fifthPage";
import { Footer } from "./Footer/footer";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useRouter } from "next/navigation";
import AuthDetails from "./authentication/AuthDetails";

const DivStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export default function RootLayout() {
  // const [authUser, setAuthUser] = useState(null);
  // const router = useRouter();

  // useEffect(() => {
  //   if (user == null) {
  //     router.push("/login");
  //     setAuthUser(user);
  //   } else {
  //     setAuthUser(null);
  //   }
  // });

  return (
    <>
      <DivStyle>
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <FourthPage />
        <FifthPage />
        <Footer />
      </DivStyle>
    </>
  );
}
