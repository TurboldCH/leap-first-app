import Image from "next/image";
import { ThirdPageContent } from "./thirdpagecontent";

const thirdpage = {
  width: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  overflowX: "hidden",
};

export const Thirdpage = () => {
  return (
    <div style={thirdpage}>
      <Image
        src="/thirdPage.png"
        alt="Third page image"
        width={824}
        height={675}
        style={{ position: "absolute", top: 160, left: -267 }}
      />
      <ThirdPageContent />
    </div>
  );
};
