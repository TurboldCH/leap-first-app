import { styled } from "@mui/material";

const ContentStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "21px",
  paddingTop: "21px",
});
const HeaderStyle = styled("div")({
  fontFamily: "'Cabin', sans-serif",
  fontSize: "24px",
  fontWeight: "500",
  color: "#25313C",
  width: "330px",
});
const ParagraphStyle = styled("div")({
  fontFamily: "'Mulish', sans-serif",
  fontWeight: "400",
  fontSize: "14px",
  color: "#25313C",
  width: "318px",
  lineHeight: "21.084px",
  height: "84px",
});

export const Overview = ({
  header,
  content,
}: {
  header: string;
  content: string;
}) => {
  return (
    <ContentStyle>
      <HeaderStyle>
        <div>{header}</div>
      </HeaderStyle>
      <ParagraphStyle>
        <div>{content}</div>
      </ParagraphStyle>
    </ContentStyle>
  );
};
