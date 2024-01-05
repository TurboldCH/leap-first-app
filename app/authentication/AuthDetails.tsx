"use client";
import {
  User,
  UserInfo,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useEffect, useState } from "react";
import { firebaseApp } from "../firebase";

export const AuthContext = createContext<{
  user: UserInfo | null;
}>({ user: null });

export default function AuthDetails({ children }: { children: ReactNode }) {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;
  // console.log("User: ", user);
  // console.log("Auth:", auth);
  const router = useRouter();
  const [authUser, setAuthUser] = useState<User>();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(undefined);
        router.push("../login");
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
      <AuthContext.Provider value={{ user: user }}>
        {children}
      </AuthContext.Provider>
      {authUser && (
        <>
          {/* {`Signed in as ${authUser.email}`} */}
          <button
            style={{
              display: "flex",
              border: "none",
              background: "transparent",
              textDecoration: "underline",
              textDecorationColor: "gray",
              fontFamily: "'Mulish', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "175.7%",
              color: "#7969EA",
            }}
            onClick={userSignOut}
          >
            Sign out
          </button>{" "}
        </>
      )}
    </>
  );
}
