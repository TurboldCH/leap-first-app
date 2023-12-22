import { useContext, useState } from "react";
import { IconButton, styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/app/firebase";
import { AuthContext } from "@/app/authentication/AuthDetails";
import Image from "next/image";

const IconButtonStyle = styled("div")({
  display: "flex",
  backgroundColor: "#FFd",
  borderRadius: "50%",
});

export const SingleComment = ({
  text,
  postId,
  commentId,
  createdBy,
}: {
  text: string;
  postId: string;
  commentId: string;
  createdBy: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  const deleteComment = async () => {
    try {
      await deleteDoc(
        doc(getFirestore(firebaseApp), `blog/${postId}/comments`, commentId)
      );
    } catch (error) {
      alert(error);
    }
  };
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "50px",
          alignItems: "center",
          justifyContent: "space-between",
          width: "700px",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user?.profilePic ? (
            <Image
              src={user?.profilePic}
              alt="Profile picture"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={"/../login/default.png"}
              alt="Profile picture"
              width={40}
              height={40}
            />
          )}
          <div>
            <p style={{ textTransform: "uppercase" }}>
              &#x21312; By {createdBy}
            </p>
            <p style={{ fontFamily: "" }}>{text}</p>
          </div>
        </div>

        {isHovering && (
          <IconButtonStyle>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" onClick={deleteComment} />
            </IconButton>
          </IconButtonStyle>
        )}
      </div>
    </div>
  );
};
