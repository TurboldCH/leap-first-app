export const Paragraph = ({
  p1,
  p2,
  p3,
}: {
  p1: string;
  p2: string;
  p3: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ paddingLeft: "140px" }}>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
    </div>
  );
};
