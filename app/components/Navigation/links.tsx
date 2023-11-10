import { Link } from "./link";
import { Button } from "../Button";

const links = {
  display: "flex",
  alignItems: "center",
  gap: "30px",
};

export const Links = ({ color, type }: { color: string; type: string }) => {
  return (
    <div id="links" style={links}>
      <Link color={color} href={""}>
        Products
      </Link>
      <Link color={color} href={""}>
        Services
      </Link>
      <Link color={color} href={""}>
        Contact
      </Link>
      <Link color={color} href={""}>
        Log in
      </Link>
      <Button text="Get Access" type={type} />
    </div>
  );
};
