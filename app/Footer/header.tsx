import { Logo } from "../firstSection/logo";

const style = {
  display: "flex",
  justifyContent: "space-between",
};

const logo = {};

export const Header = ({
  header1,
  header2,
  header3,
}: {
  header1: string;
  header2: string;
  header3: string;
}) => {
  return (
    <div style={style}>
      <Logo />
      <p>{header1}</p>
      <p>{header2}</p>
      <p>{header3}</p>
    </div>
  );
};
