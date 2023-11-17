const style = {
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
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div style={style}>{children}</div>;
};
