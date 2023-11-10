const get_access = {
  borderRadius: "4px",
  border: "2px solid #BBC8D4",
  padding: "16px 22px",
  color: "#BBC8D4",
  backgroundColor: "transparent",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "24px",
};

const early_access = {
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#0bbef2",
  padding: "16px 20px",
  color: "white",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "24px",
};

const blog_getaccess = {
  borderRadius: "4px",
  border: "2px solid #5A4FF3",
  backgroundColor: "rgba(77, 160, 253, 0.10)",
  padding: "16px 20px",
  color: "#4DA0FD",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "24px",
}

export const Button = ({ text, type }: { text: string; type: string }) => {
  if (type === "grey") {
    return <button style={get_access}>{text}</button>;
  }
  else if (type ==="blog"){
    return <button style={blog_getaccess}>{text}</button>;
  }
  else if (type ==="blue"){
    return <button style={early_access}>{text}</button>;
  }
  return <button style={early_access}>Default</button>;
};
