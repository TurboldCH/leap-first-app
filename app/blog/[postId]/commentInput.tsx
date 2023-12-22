import Image from "next/image";
import { TextField } from "@mui/material";
import { getStorage, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { firebaseApp } from "@/app/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/authentication/AuthDetails";

export const CommentInput = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState<string>();
  const db = getFirestore(firebaseApp);
  const { user } = useContext(AuthContext);

  const uploadCommentToStorage = async () => {
    // const storageRef = ref(storage, comment ? undefined : comment);
    console.log(user);
    try {
      await addDoc(collection(db, `blog/${postId}/comments`), {
        comment: comment,
        createdBy: user,
      });
      setComment("");
    } catch (error) {
      alert(error);
    }
  };

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
          placeholder="Comments"
          value={comment}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" color="primary">
                  <AddCommentIcon
                    onClick={async (event) => {
                      uploadCommentToStorage();
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
