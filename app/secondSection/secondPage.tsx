import Image from "next/image";
import { SecondpageContent } from "./secondpagecontent";
import { Container } from "../components/container";
import { styled } from "@mui/material";

const SecondpageStyle = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  overflowX: "hidden",
});

const BackgroundImgStyle = styled("div")({
  position: "absolute",
  width: "100%",
  top: "10%",
  bottom: "0",
  left: "50%",
  right: "0",
  overflow: "hidden",
});

export const Secondpage = () => {
  return (
    <SecondpageStyle>
      <Container>
        <SecondpageContent />
      </Container>
      <BackgroundImgStyle>
        <Image
          src="/firstPage/messageBox.png"
          alt="Message Box"
          layout="fill"
        />
      </BackgroundImgStyle>
    </SecondpageStyle>
  );
};
