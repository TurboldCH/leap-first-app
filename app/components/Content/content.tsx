import { styled } from "@mui/material";

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
    </ContentStyle>
  );
};
