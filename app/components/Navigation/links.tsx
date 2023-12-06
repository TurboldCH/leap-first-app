import { Link } from "./link";
import { Button } from "../Button";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "@/app/firebase";

const auth = getAuth(firebaseApp);

export const Links = ({ color, type }: { color: string; type: string }) => {
  return (
    <div
      id="links"
      style={{ display: "flex", alignItems: "center", gap: "30px" }}
    >
      <Link color={color} href={""}>
        Products
      </Link>
      <Link color={color} href={""}>
        Services
      </Link>
      <Link color={color} href={""}>
        Contact
      </Link>
      <Link color={color} href={"login"}>
        Log in
      </Link>
      <Button text="Get Access" type={type} />
    </div>
  );
};
