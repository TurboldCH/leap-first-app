"use client";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { firebaseApp } from "../../firebase";
import { TextField, styled } from "@mui/material";
import { Footer } from "@/app/Footer/footer";
import React from "react";

const ContainerStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  //   flexDirection: "column",
  margin: "0, auto",
  maxWidth: "1440px",
  position: "relative",
});

export default function Home() {
  const [url, setURL] = useState<File>();
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const db = getFirestore(firebaseApp);

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      console.log(files[0], "File uploaded");
      setURL(files[0].name);
      console.log("URL set");
    } else {
      console.log("File size too large");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <h1
          style={{
            paddingTop: "200px",
            width: "463px",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            fontSize: "100px",
            color: "white",
          }}
        >
          <span
            style={{
              background:
                "radial-gradient(134.38% 115.87% at 106.92% -16.67%, #FEDFD0 0%, #FF7955 75.12%, #2665F9 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              color: "#FFF",
              fontWeight: "900",
            }}
          >
            Perfect
          </span>
          input component
        </h1>
        <p
          style={{
            paddingBottom: "140px",
            color: "gray",
          }}
        >
          by @maeveux
        </p>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <h1>Create a post</h1>
        <div>
          <input
            type="file"
            placeholder="Background file"
            onChange={(event) => {
              handleSelectedFile(event.target.files);
              console.log(event.target.files, "Event target files");
            }}
          />
          <input
            onChange={(event) => {
              setHeader(event.target.value);
            }}
            placeholder="Title"
          />
          <input
            onChange={(event) => {
              setContent(event.target.value);
            }}
            placeholder="Content"
          />
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Your name"
          />
          <input
            onChange={(event) => {
              setDate(event.target.value);
            }}
            placeholder="Date"
          />
          <button
            onClick={async () => {
              await addDoc(collection(db, "blog"), {
                url: url || null,
                header: header,
                content: content,
                name: name,
                date: date,
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
