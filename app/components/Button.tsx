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
};
const next = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  color: "#6D7D8B",
  textAlign: "center",
  width: "165px",
  height: "44px",
};

export const Button = ({ text, type }: { text: string; type: string }) => {
  if (type === "grey") {
    return <button style={get_access}>{text}</button>;
  } else if (type === "blog") {
    return <button style={blog_getaccess}>{text}</button>;
  } else if (type === "blue") {
    return <button style={early_access}>{text}</button>;
  } else if (type === "next") {
    return (
      <button style={next}>
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7.5001 5.59221C7.1751 5.91721 7.1751 6.44221 7.5001 6.76721L10.7334 10.0005L7.5001 13.2339C7.1751 13.5589 7.1751 14.0839 7.5001 14.4089C7.8251 14.7339 8.3501 14.7339 8.6751 14.4089L12.5001 10.5839C12.8251 10.2589 12.8251 9.73388 12.5001 9.40888L8.6751 5.58388C8.35843 5.26721 7.8251 5.26721 7.5001 5.59221Z"
            fill="#6D7D8B"
          />
        </svg>
      </button>
    );
  }
  return <button style={early_access}>Default</button>;
};
