import Image from "next/image";
import { ThirdPageContent } from "./thirdpagecontent";
import { Container } from "../components/container";

const thirdpage = {
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
  bottom: "10%",
  left: "0",
  right: "60%",
  overflow: "hidden",
};

export const Thirdpage = () => {
  return (
    <div style={thirdpage}>
      <div style={background_img}>
        <Image
          src="/firstPage/thirdPage.png"
          alt="Third page image"
          layout="fill"
        />
      </div>
      <Container>
        <ThirdPageContent />
      </Container>
    </div>
  );
};
