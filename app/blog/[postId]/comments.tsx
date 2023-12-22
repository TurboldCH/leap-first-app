import { firebaseApp } from "@/app/firebase";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { SingleComment } from "./singleComment";

export const Comments = ({ postId }: { postId: string }) => {
  const [commentsValue] = useCollection(
    collection(getFirestore(firebaseApp), `blog/${postId}/comments`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      {commentsValue?.docs.map((value, index) => {
        // {console.log("Comment id: ", value.id)}
        return (
          <div style={{ width: "700px" }} key={index}>
            <SingleComment
              text={value.data().comment}
              postId={postId}
              commentId={value.id}
            />
          </div>
        );
      })}
    </div>
  );
};
