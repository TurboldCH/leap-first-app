import { firebaseApp } from "@/app/firebase";
import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { IconButton, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const IconButtonStyle = styled("div")({
  display: "flex",
  backgroundColor: "#FFd",
  borderRadius: "50%",
});

export const Comments = ({ postId }: { postId: string }) => {
  const [isHovering, setIsHovering] = useState(true);
  const [isDisplaying, setIsDiplaying] = useState(true);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [commentsValue] = useCollection(
    collection(getFirestore(firebaseApp), `blog/${postId}/comments`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const deleteComment = async () => {
    try {
      // await deleteDoc(
      //   doc(getFirestore(firebaseApp), `blog/${postId}/comments`, commentId)
      // );
      setIsDiplaying(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {isDisplaying && (
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          {commentsValue?.docs.map((value, index) => {
            return (
              <div>
                <div
                  style={{
                    display: "flex",
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "700px",
                  }}
                >
                  {value.data().comment}
                  {isHovering && (
                    <IconButtonStyle>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon
                          fontSize="inherit"
                          onClick={deleteComment}
                        />
                      </IconButton>
                    </IconButtonStyle>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
