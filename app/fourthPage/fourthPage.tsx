import Image from "next/image";
import { FourthPageContent } from "./fourthpagecontent";

const style = {
  width: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  paddingLeft: "140px",
  overflowX: "hidden",
};

export const FourthPage = () => {
  return (
    <div style={style}>
      <Image
        src="/fourthPage.png"
        alt="Fourth page image"
        width={824}
        height={675}
        style={{ position: "absolute", top: 0, left: 833 }}
      />
      <FourthPageContent />
    </div>
  );
};
