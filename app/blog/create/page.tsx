"use client";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { firebaseApp } from "../../firebase";
import React from "react";
import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useRouter } from "next/navigation";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Home() {
  const { push } = useRouter();
  const [url, setURL] = useState<File>();
  const [avatar, setAvatar] = useState<File>();
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  const handleSelectedFileURL = (files: any) => {
    if (files && files[0].size < 10000000) {
      console.log(files[0], "File uploaded");
      setURL(files[0]);
    } else {
      console.log("File size too large");
    }
  };

  const handleSelectedFileAvatar = (files: any) => {
    if (files && files[0].size < 10000000) {
      console.log(files[0], "File uploaded");
      setAvatar(files[0]);
    } else {
      console.log("File size too large");
    }
  };

  const uploadFileToStorage = async () => {
    console.log(url?.name);
    const storageRefURL = ref(storage, `${url?.name} ${Date.now()}`);
    const storageRefAVATAR = ref(storage, `${avatar?.name} ${Date.now()}`);
    try {
      await uploadBytes(storageRefURL, url!);
      await uploadBytes(storageRefAVATAR, avatar!);
      const downloadAvatarURL = await getDownloadURL(storageRefAVATAR);
      const downlaodUrl = await getDownloadURL(storageRefURL);
      await addDoc(collection(db, "blog"), {
        url: downlaodUrl,
        header: header,
        content: content,
        name: name,
        date: date,
        avatar: downloadAvatarURL,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <AuthDetails /> */}
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
            fontFamily: "'mulish', sans-serif",
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
        <h1 style={{ fontFamily: "'mulish', sans-serif" }}>Create a post</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              onChange={(event) => {
                handleSelectedFileURL(event.target.files);
              }}
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload URL
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              onChange={(event) => {
                handleSelectedFileAvatar(event.target.files);
              }}
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload Avatar
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <Box
            style={{ display: "flex", flexDirection: "column" }}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "65ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="Header"
              placeholder="Your Title Goes Here"
              onChange={(event) => {
                setHeader(event.target.value);
              }}
            />
            <TextField
              required
              id="outlined-disabled"
              label="Content"
              placeholder="Your Content Goes Here"
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Name"
              placeholder="Your name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <TextField
              required
              id="outlined-read-only-input"
              label="Date"
              placeholder="Januray 21, 2023"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </Box>
          <Button
            style={{ width: "200px" }}
            variant="outlined"
            onClick={async () => {
              uploadFileToStorage();
              // push("/blog");
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
