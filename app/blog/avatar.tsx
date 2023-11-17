import { styled } from "@mui/material";
import Image from "next/image";

const DivStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#6D7D8B",
  paddingTop: "40px",
  fontFamily: "'Mulish', sans-serif",
  fontSize: "12px",
  fontWeight: "300",
  lineHeight: "18px",
});

export const Avatar = ({
  url,
  name,
  date,
}: {
  url: string;
  name: string;
  date: string;
}) => {
  return (
    <DivStyle>
      <Image
        src={url}
        alt="Profile"
        width={45}
        height={45}
        style={{ borderRadius: "100%" }}
      />
      <div style={{ display: "flex" }}>
        <p style={{ paddingLeft: "20px", paddingRight: "9px" }}>{name}</p>
        <div style={{ borderLeft: "1px solid grey" }}></div>
        <p style={{ paddingLeft: "15px" }}>{date}</p>
      </div>
    </DivStyle>
  );
};
