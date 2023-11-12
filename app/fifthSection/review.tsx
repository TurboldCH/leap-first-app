import Image from "next/image";
import { StarGenerator } from "./starGenerator";

const style = {
  width: "366px",
  height: "374px",
  background: "white",
  // boxShadow: "20px 20px 50px grey",
  padding: "30px 40px 40px 30px",
  display: "inline-block",
  boxSizing: "border-box",
};

const content_style = {
  width: "286px",
  fontFamily: "Mulish",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "163.15%",
  paddingTop: "20x",
  paddingBottom: "50px",
};

const profile_style = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
};
const name_style = {
  color: "#000",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "163.15%",
};

export const Review = ({
  content,
  profileURL,
  name,
  count,
}: {
  content: string;
  profileURL: string;
  name: string;
  count: number;
}) => {
  return (
    <div style={style}>
      <StarGenerator count={count} />
      <p style={content_style}>{content}</p>
      <div style={profile_style}>
        <Image
          src={profileURL}
          alt="Profile"
          width={56}
          height={56}
          style={{ borderRadius: "28px" }}
        />
        <p style={name_style}>{name}</p>
      </div>
    </div>
  );
};
