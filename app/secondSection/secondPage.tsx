import Image from "next/image";
import { SecondpageContent } from "./secondpagecontent";

const secondpage = {
  width: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
  padding: "0 0 0 135px",
  overflowX: "hidden",
};

export const Secondpage = () => {
  return (
    <div style={secondpage}>
      <SecondpageContent />
      <Image
        src="/messageBox.png"
        alt="Message Box"
        width={1321}
        height={723}
        style={{position: "absolute", top: 166, left: 833}}
      />
    </div>
  );
};
