import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Email } from "@mui/icons-material";

export default function AuthDetails() {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;
  const router = useRouter();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
        router.push("login");
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("SignedOut");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {authUser ? (
        <>
          {`Signed in as ${authUser.email}`}
          <button 
          style = {{width: "200px"}}
          onClick={userSignOut}>Sign out</button>{" "}
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </>
  );
}
