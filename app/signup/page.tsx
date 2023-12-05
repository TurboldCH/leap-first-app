"use client";

import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const auth = getAuth(firebaseApp);

  const signUp = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <head>
        <title>Sign In</title>
      </head>
      <body>
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/login/background.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              zIndex: "-1",
              overflow: "hidden",
              backgroundColor: "#2148C0",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="102"
              viewBox="0 0 124 102"
              fill="none"
            >
              <path
                d="M2 2H15.6523C17.8311 2 19.7535 3.42651 20.3871 5.51343L41.7596 75.9005C42.3932 77.9874 44.3156 79.4139 46.4942 79.4139H94.6487C96.9129 79.4139 98.8889 77.8753 99.4455 75.6779L108.068 41.6561C108.624 39.4586 110.6 37.9201 112.865 37.9201H121.386"
                stroke="white"
                stroke-width="3.75648"
                stroke-linecap="round"
              />
              <path
                d="M72.5933 21.7428C71.8686 21.0174 70.6937 21.0174 69.969 21.7428L58.159 33.5667C57.4344 34.2923 57.4344 35.4686 58.159 36.1942C58.8837 36.9197 60.0588 36.9197 60.7835 36.1942L71.2811 25.6842L81.7788 36.1942C82.5035 36.9197 83.6785 36.9197 84.4032 36.1942C85.1279 35.4686 85.1279 34.2923 84.4032 33.5667L72.5933 21.7428ZM73.1369 57.7381V23.0566H69.4254V57.7381H73.1369Z"
                fill="white"
              />
              <path
                d="M58.2909 99.8512C61.3656 99.8512 63.8581 97.3557 63.8581 94.2774C63.8581 91.1991 61.3656 88.7036 58.2909 88.7036C55.2162 88.7036 52.7236 91.1991 52.7236 94.2774C52.7236 97.3557 55.2162 99.8512 58.2909 99.8512Z"
                stroke="white"
                stroke-width="3.00518"
              />
              <path
                d="M85.5085 99.8512C88.5832 99.8512 91.0757 97.3557 91.0757 94.2774C91.0757 91.1991 88.5832 88.7036 85.5085 88.7036C82.4338 88.7036 79.9412 91.1991 79.9412 94.2774C79.9412 97.3557 82.4338 99.8512 85.5085 99.8512Z"
                stroke="white"
                stroke-width="3.00518"
              />
            </svg>
            <h1 style={{ color: "#FFF", fontFamily: "'Mulish', sans-serif" }}>
              SIGN UP
            </h1>
            <form onSubmit={signUp}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextField
                  label="Enter email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <TextField
                  type="password"
                  label="Create password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button
                  style={{
                    borderRadius: "4px",
                    background: "#FFF",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
                  }}
                  type="submit"
                  onClick={async () => {
                    signUp();
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
