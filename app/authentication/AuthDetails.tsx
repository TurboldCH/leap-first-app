"use client";
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext({ user: "" });

export default function AuthDetails({ children }: { children: ReactNode }) {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;
  const router = useRouter();
  const [authUser, setAuthUser] = useState<User>(null);

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
      <AuthContext.Provider value={{ user: user }}>
        {children}
      </AuthContext.Provider>
      {authUser ? (
        <>
          {/* {`Signed in as ${authUser.email}`} */}
          <button
            style={{
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
      ) : (
        <p
          style={{
            border: "none",
            background: "transparent",
            textDecoration: "underline",
            textDecorationColor: "gray",
            fontFamily: "'Mulish', sans-serif",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "175.7%",
            color: "#256071",
          }}
        >
          Signed Out
        </p>
      )}
    </>
  );
}