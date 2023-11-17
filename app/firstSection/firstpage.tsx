import { Invitation } from "./invitation";
import { Navigation } from "../components/Navigation/navigation";
import Image from "next/image";
import { Container } from "../components/container";

const firstpage = {
  width: "auto",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};
const background_img = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "-1",
  overflow: "hidden",
};

export const Firstpage = () => {
  return (
    <div id="firstPage" style={firstpage}>
      <Image
        src="/firstImage.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={background_img}
      />
      <Navigation type="grey" />
      <Container>
        <Invitation />
      </Container>
    </div>
  );
};
