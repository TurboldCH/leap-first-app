import Image from "next/image";
import { StarGenerator } from "./starGenerator";
import { styled } from "@mui/material";

const DivStyle = styled("div")({
  width: "366px",
  height: "374px",
  background: "white",
  padding: "30px 40px 40px 30px",
  display: "inline-block",
  boxSizing: "border-box",
});

const ContentStyle = styled("div")({
  width: "286px",
  fontFamily: "Mulish",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "163.15%",
  paddingTop: "20px",
  paddingBottom: "50px",
});

const ProfileStyle = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});
const name_style = {};

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
    <DivStyle>
      <div>
        <StarGenerator count={count} />
        <ContentStyle>
          <div>{content}</div>
        </ContentStyle>
        <ProfileStyle>
          <Image
            src={profileURL}
            alt="Profile"
            width={56}
            height={56}
            style={{ borderRadius: "28px" }}
          />
          <p
            style={{
              color: "#000",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "163.15%",
            }}
          >
            {name}
          </p>
        </ProfileStyle>
      </div>
    </DivStyle>
  );
};
