import { AuthContext } from "@/app/authentication/AuthDetails";
import { styled } from "@mui/material";
import { useContext } from "react";

const ContentStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const Content = ({
  header,
  content,
  headerColor,
  contentColor,
  headerWidth,
  headerWeight,
  contentWidth,
  contentWeight,
  gap,
}: {
  header: string;
  content: string;
  headerColor: string;
  contentColor: string;
  headerWidth: string;
  headerWeight: string;
  contentWidth: string;
  contentWeight: string;
  gap: string;
}) => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  return (
    <ContentStyle style={{ gap: gap }}>
      <h1
        style={{
          fontFamily: "'Mulish', sans-serif",
          fontSize: "48px",
          width: headerWidth,
          color: headerColor,
          fontWeight: headerWeight,
        }}
      >
        {header}
      </h1>
      <p
        style={{
          fontFamily: "'Mulish', sans-serif",
          fontSize: "18px",
          width: contentWidth,
          color: contentColor,
          fontWeight: contentWeight,
        }}
      >
        {content}
      </p>
      <p
        style={{
          fontFamily: "'Mulish', sans-serif",
          fontSize: "18px",
          fontWeight: "300",
          color: contentColor,
        }}
      >
        by {user?.email}
      </p>
    </ContentStyle>
  );
};
