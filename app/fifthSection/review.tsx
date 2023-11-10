import Image from "next/image";

const style = {
  width: "366px",
  height: "374px",
  background: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19),",
  display: "inline-block",
  boxSizing: "border-box",
};

const content_style = {
  width: "286px",
  fontFamily: "Mulish",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "163.15%",
  padding: "0 42px 0 33px",
};

const profile_style = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "50px 0 40px 40px",
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
}: {
  content: string;
  profileURL: string;
  name: string;
}) => {
  return (
    <div style={style}>
      <Image
        src="/stars.png"
        alt="Star icons"
        width={120}
        height={24}
        style={{ padding: "30px 0 20px 30px" }}
      />
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
