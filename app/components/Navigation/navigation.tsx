import { Links } from "./links";
import { Logo } from "../../firstSection/logo";
import { styled } from "@mui/material";

const NavStyle = styled('div')({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  paddingTop: "10px",
});

export const Navigation = ({ type }: { type: string }) => {
  if (type === "blog") {
    return (
      <NavStyle>
        <Logo color="black" />
        <Links color="#6D7D8B" type={type} />
      </NavStyle>
    );
  }
  return (
    <NavStyle>
      <Logo color="white" />
      <Links color="white" type={type} />
    </NavStyle>
  );
};
