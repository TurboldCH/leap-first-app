export const Content = ({
  header,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
}: {
  header: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexBasis:"auto" }}>
      <p style={{ paddingBottom: "33px" }}>{header}</p>
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
      <p>{p6}</p>
    </div>
  );
};
