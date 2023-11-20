import { Invitation } from "./invitation";
import { Navigation } from "../components/Navigation/navigation";
import Image from "next/image";
import { Container } from "../components/container";
import { styled } from "@mui/material";

const FirstpageStyle = styled("div")({
  width: "auto",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const Firstpage = () => {
  return (
    <FirstpageStyle>
      <Image
        src="/firstPage/firstImage.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "-1",
          overflow: "hidden",
        }}
      />
      <Navigation type="grey" />
      <Container>
        <Invitation />
      </Container>
    </FirstpageStyle>
  );
};
