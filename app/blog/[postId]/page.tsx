"use client";
import { Navigation } from "../../components/Navigation/navigation";
import { styled } from "@mui/material";
import { Footer } from "../../Footer/footer";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  DocumentData,
} from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import { Post } from "../post";
import { useEffect, useState } from "react";
import PostDetail from "./postDetail";

const DivStyle = styled("div")({
  background: "#FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const ContainerStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0, auto",
  maxWidth: "1405px",
  position: "relative",
  paddingBottom: "140px",
});

export default function Page({ params }: { params: any }) {
  // console.log(params.postId);
  //Blog ID
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [postdata, setPostdata] = useState<DocumentData>();
  const [comment, setComment] = useState();
  useEffect(() => {
    const fetchDoc = async () => {
      const db = getFirestore(firebaseApp);
      const docRef = doc(db, "blog", params.postId);
      const docSnap = await getDoc(docRef);
      setPostdata(docSnap.data());
    };
    fetchDoc();
  }, []);
  return (
    <>
      {error && <h1 style={{ color: "black" }}>ERROR...</h1>}
      {loading && <h1 style={{ color: "black" }}>LOADING...</h1>}
      {!loading && (
        <div>
          <PostDetail
            postId={params.postId}
            name={postdata?.name}
            header={postdata?.header}
            avatar={postdata?.avatar}
            url={postdata?.url}
            date={postdata?.date}
            id={postdata?.id}
            contentDetail={postdata?.contentDetail}
            content={""}
          />
        </div>
      )}
    </>
  );
}
