const content_style = {
  display: "flex",
  flexDirection: "column",
  gap: "21px",
};
const header_style = {
  fontFamily: "'Cabin', sans-serif",
  fontSize: "24px",
  fontWeight: "500",
  color: "#25313C",
  width: "330px",
};
const content_p = {
  fontFamily: "'Mulish', sans-seris",
  fontWeight: "400",
  fontSize: "14px",
  color: "#25313C",
  width: "318px",
  lineHeight: "21.084px",
};

export const Overview = ({
  header,
  content,
}: {
  header: string;
  content: string;
}) => {
  return (
    <div style={{ ...content_style }}>
      <h1 style={{ ...header_style }}>{header}</h1>
      <p style={{ ...content_p }}>{content}</p>
    </div>
  );
};
