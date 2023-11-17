import Image from "next/image";
import { FourthPageContent } from "./fourthpagecontent";
import { Container } from "../components/container";
import { styled } from "@mui/material";

const MyDiv = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  overflowX: "hidden",
});

const BackgroundDiv = styled("div")({
  position: "absolute",
  top: "0",
  bottom: "20%",
  left: "50%",
  right: "0",
  overflow: "hidden",
});

export const FourthPage = () => {
  return (
    <MyDiv>
      <BackgroundDiv>
        <Image
          src="/firstPage/fourthPage.png"
          alt="Fourth page image"
          layout="fill"
        />
      </BackgroundDiv>
      <Container>
        <FourthPageContent />
      </Container>
    </MyDiv>
  );
};
