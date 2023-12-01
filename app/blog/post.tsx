import Image from "next/image";
import { Overview } from "./overview";
import { Avatar } from "./avatar";
import { IconButton, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  doc,
  deleteDoc,
  getFirestore,
  collection,
  documentId,
} from "firebase/firestore";
import { firebaseApp } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

const DivStyle = styled("div")({
  padding: "0",
  width: "363px",
  height: "440px",
  boxShadow: "20px 20px 50px grey",
  borderRadius: "30px",
  overflow: "hidden",
});

const IconButtonStyle = styled("div")({
  display: "flex",
  backgroundColor: "#FFd",
  position: "absolute",
  borderRadius: "50%",
});

export const Post = ({
  id,
  url,
  header,
  content,
  avatar,
  name,
  date,
}: {
  id: string;
  url: string;
  header: string;
  content: string;
  avatar: string;
  name: string;
  date: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDisplaying, setIsDiplaying] = useState(true);

  const storage = getStorage(firebaseApp);
  const db = getFirestore(firebaseApp);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const deleteFile = async () => {
    try {
      await deleteDoc(doc(db, "blog", id));
      setIsDiplaying(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {isDisplaying && (
        <>
          <DivStyle
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            id="blog"
          >
            {isHovering && (
              <>
                <IconButtonStyle>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" onClick={deleteFile} />
                  </IconButton>
                </IconButtonStyle>
              </>
            )}
            <Image src={url} alt="Blog" width={370} height={147} />
            <div style={{ padding: "0 0 19px 34px" }}>
              <Overview header={header} content={content} />
              <Avatar url={avatar} name={name} date={date} />
            </div>
          </DivStyle>
        </>
      )}
    </>
  );
};
