import Image from "next/image";
import { FourthPageContent } from "./fourthpagecontent";
import { Container } from "../components/container";

const style = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  overflowX: "hidden",
};

const background_img = {
  position: "absolute",
  top: "0",
  bottom: "20%",
  left: "50%",
  right: "0",
  overflow: "hidden",
};

export const FourthPage = () => {
  return (
    <div style={style}>
      <div style={background_img}>
        <Image
          src="/firstPage/fourthPage.png"
          alt="Fourth page image"
          layout="fill"
        />
      </div>
      <Container>
        <FourthPageContent />
      </Container>
    </div>
  );
};
