import Image from "next/image";
import { TextField } from "@mui/material";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { firebaseApp } from "@/app/firebase";
import { ChangeEventHandler, useContext, useRef, useState } from "react";
import { AuthContext } from "@/app/authentication/AuthDetails";
import { useDocument } from "react-firebase-hooks/firestore";

export const CommentInput = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState<string>();
  const db = getFirestore(firebaseApp);
  const { user } = useContext(AuthContext);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const storage = getStorage(firebaseApp);

  const [value, loading, error] = useDocument(
    doc(db, "users", String(user?.uid)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!e.target.files) return;
    const image = e.target.files[0];
    const storageRef = ref(storage, `${image?.name}-ProfileImage`);
    try {
      await uploadBytes(storageRef, image!);
      const downloadProfilePic = await getDownloadURL(storageRef);
      await setDoc(doc(db, "users", String(user?.uid)), {
        profilePic: downloadProfilePic,
      });
    } catch (error) {
      alert(error);
    }
  };

  const changeProfilePic = async (e: { preventDefault: () => void }) => {
    hiddenFileInput.current?.click();
  };

  const uploadCommentToStorage = async () => {
    try {
      await addDoc(collection(db, `blog/${postId}/comments`), {
        comment: comment,
        createdBy: user?.email,
        profilePic: value?.data()?.profilePic,
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
          style={{ cursor: "pointer" }}
          src={
            value?.data()?.profilePic
              ? value?.data()?.profilePic
              : "/../login/default.png"
          }
          width={56}
          height={56}
          alt={"Commentor"}
          onClick={changeProfilePic}
        />
        <input
          type="file"
          onChange={handleChange}
          ref={hiddenFileInput}
          style={{ display: "none" }}
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
