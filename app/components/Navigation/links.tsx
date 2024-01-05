import { Link } from "./link";
import { Button } from "../Button";
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "@/app/firebase";
import AuthDetails from "@/app/authentication/AuthDetails";

const auth = getAuth(firebaseApp);

export const Links = ({ color, type }: { color: string; type: string }) => {
   
  return (
    <AuthDetails>
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
        
        {/* <Link color={color} href={"login"}>
        Log in
      </Link> */}
        <Link color={color} href={"/blog"}>
          Blogs
        </Link>
        <Button text="Sign Out" type={type} />
      </div>
    </AuthDetails>
  );
};
