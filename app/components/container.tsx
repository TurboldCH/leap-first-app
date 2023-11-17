import { styled } from "@mui/material";

const DivStyle = styled('div')({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "0px",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1440px",
  position: "relative",
});

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <DivStyle>
      <div>{children}</div>
    </DivStyle>
  );
};
