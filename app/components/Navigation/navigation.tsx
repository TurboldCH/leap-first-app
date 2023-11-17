import { Links } from "./links";
import { Logo } from "../../firstSection/logo";

const nav_bar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "10px",
};

export const Navigation = ({ type }: { type: string }) => {
  if (type === "blog") {
    return (
      <div style={nav_bar}>
        <Logo color="black" />
        <Links color="#6D7D8B" type={type} />
      </div>
    );
  }
  return (
    <div style={nav_bar}>
      <Logo color="white" />
      <Links color="white" type={type} />
    </div>
  );
};
