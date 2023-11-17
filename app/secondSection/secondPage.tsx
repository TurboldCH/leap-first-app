import Image from "next/image";
import { SecondpageContent } from "./secondpagecontent";
import { Container } from "../components/container";

const secondpage = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  overflowX: "hidden",
};

const background_img = {
  position: "absolute",
  width: "100%",
  top: "10%",
  bottom: "0",
  left: "50%",
  right: "0",
  overflow:"hidden",
};

export const Secondpage = () => {
  return (
    <div id="secondPage" style={secondpage}>
      <Container>
        <SecondpageContent />
      </Container>
      <div style={background_img}>
        <Image
          src="/firstPage/messageBox.png"
          alt="Message Box"
          layout="fill"
        />
      </div>
    </div>
  );
};
