const content_style = {
  display: "flex",
  flexDirection: "column",
};
const header_style = {
  fontFamily: "'Mulish', sans-serif",
  fontSize: "48px",
  fontWeight: "700",
};
const content_p = {
  fontWeight: "400",
  fontSize: "18px",
};

export const Content = ({
  header,
  content,
  color,
  headerWidth,
  contentWidth,
  gap,
}: {
  header: string;
  content: string;
  color: string;
  headerWidth: string;
  contentWidth: string;
  gap: string;
}) => {
  return (
    <div style={{ ...content_style, color: color, gap: gap }}>
      <h1 style={{ ...header_style, width: headerWidth }}>{header}</h1>
      <p style={{ ...content_p, width: contentWidth }}>{content}</p>
    </div>
  );
};
