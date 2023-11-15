const content_style = {
  display: "flex",
  flexDirection: "column",
};
const header_style = {
  fontFamily: "'Mulish', sans-serif",
  fontSize: "48px",
  fontWeight: "800",
};
const content_p = {
  fontFamily: "'Mulish', sans-serif",
  fontWeight: "400",
  fontSize: "18px",
};

export const Content = ({
  header,
  content,
  headerColor,
  contentColor,
  headerWidth,
  contentWidth,
  gap,
}: {
  header: string;
  content: string;
  headerColor: string;
  contentColor: string;
  headerWidth: string;
  contentWidth: string;
  gap: string;
}) => {
  return (
    <div style={{ ...content_style, gap: gap }}>
      <h1 style={{ ...header_style, width: headerWidth, color: headerColor }}>
        {header}
      </h1>
      <p style={{ ...content_p, width: contentWidth, color: contentColor }}>
        {content}
      </p>
    </div>
  );
};
