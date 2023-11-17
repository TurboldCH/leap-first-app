import Image from "next/image";
import { ThirdPageContent } from "./thirdpagecontent";
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
  bottom: "10%",
  left: "0",
  right: "60%",
  overflow: "hidden",
});

export const Thirdpage = () => {
  return (
    <MyDiv>
      <BackgroundDiv>
        <Image
          src="/firstPage/thirdPage.png"
          alt="Third page image"
          layout="fill"
        />
      </BackgroundDiv>
      <Container>
        <ThirdPageContent />
      </Container>
    </MyDiv>
  );
};
