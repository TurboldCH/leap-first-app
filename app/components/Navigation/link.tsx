export const Link = ({
  color,
  children,
  href,
}: {
  color: string;
  children: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      style={{
        textDecoration: "underline",
        textDecorationColor: "gray",
        fontFamily: "'Mulish', sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "175.7%",
        color: color,
      }}
    >
      {children}
    </a>
  );
};
