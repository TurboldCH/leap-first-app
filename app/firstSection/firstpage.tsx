import { Invitation } from "./invitation";
import { Navigation } from "../components/Navigation/navigation";
import Image from "next/image";

const firstpage = {
  width: "100wh",
  height: "100vh",
  position: "relative",
  padding: "22px 135px 0 135px",
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
    <div style={firstpage}>
      <Image
        src="/firstImage.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={background_img}
      />
      <Navigation type="grey"/>
      <Invitation/>
    </div>
  );
};
