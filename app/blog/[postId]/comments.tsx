import Image from "next/image";
import { TextField } from "@mui/material";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { firebaseApp } from "@/app/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export const Comments = () => {
  const [comment, setComment] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "700px",
        gap: "12px",
      }}
    >
      <p
        style={{
          fontFamily: "'Mulish', sans-serif",
          fontSize: "24px",
          fontWeight: "300",
          fontStyle: "normal",
          color: "#6D7D8B",
        }}
      >
        Join the conversation
      </p>
      <div>
        {/* {description} */}
      </div>
      <div style={{ display: "flex", gap: "15px" }}>
        <Image
          src={"/../blog/jacob.png"}
          width={56}
          height={56}
          alt={"Commentor"}
        />
        <TextField
          style={{ width: "630px" }}
          label="Comments"
          placeholder="Comment"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  <AddCommentIcon
                    onClick={async () => {
                      alert("Comment Successfully!");
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          // onChange={(event) => {
          //   setComment(event.target.value);
          // }}
        />
      </div>
    </div>
  );
};
