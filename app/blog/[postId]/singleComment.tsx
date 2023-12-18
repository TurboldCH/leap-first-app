import { useState } from "react";
import { IconButton, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/app/firebase";

const IconButtonStyle = styled("div")({
  display: "flex",
  backgroundColor: "#FFd",
  borderRadius: "50%",
});

export const SingleComment = ({
  text,
  postId,
  commentId,
}: {
  text: string;
  postId: string;
  commentId: string;
}) => {
  const [isHovering, setIsHovering] = useState(true);
  const [isDisplaying, setIsDiplaying] = useState(true);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const deleteComment = async () => {
    try {
      await deleteDoc(
        doc(getFirestore(firebaseApp), `blog/${postId}/comments`, commentId)
      );
      setIsDiplaying(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {isDisplaying && (
        <div
          style={{
            display: "flex",
            height: "30px",
            alignItems: "center",
            justifyContent: "space-between",
            width: "700px",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          &#x2022; {text}
          {isHovering && (
            <IconButtonStyle>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" onClick={deleteComment} />
              </IconButton>
            </IconButtonStyle>
          )}
        </div>
      )}
    </div>
  );
};
