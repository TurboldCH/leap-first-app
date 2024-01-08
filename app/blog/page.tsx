"use client";
import { Navigation } from "../components/Navigation/navigation";
import { Content } from "../components/Content/content";
import { Post } from "./post";
import { Footer } from "../Footer/footer";
import { Button } from "../components/Button";
import { styled } from "@mui/material";
import { firebaseApp } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import { Link } from "../components/Navigation/link";
import AuthDetails from "../authentication/AuthDetails";
import { useState } from "react";

const DivStyle = styled("div")({
  background: "var(--HP-design-color, #F5F7FA)",
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
  maxWidth: "1155px",
  position: "relative",
  paddingBottom: "140px",
});
const Posts_style = styled("div")({
  paddingTop: "69px",
  paddingBottom: "40px",
  display: "flex",
  justifyContent: "center",
  gap: "33px",
  flexWrap: "wrap",
});

const ContentStyle = styled("div")({
  padding: "96px 0px 64px 0px",
});

export default function RootLayout() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [startAnimation, setStartAnimation] = useState(true);

  return (
    <AuthDetails>
      <DivStyle>
        <ContainerStyle>
          <Navigation type="blog" />
          <ContentStyle>
            <Content
              header="Blog posts"
              content="Our latest updates and blogs about managing your team"
              headerColor="black"
              contentColor="#6D7D8B"
              headerWeight="800"
              headerWidth="300px"
              contentWidth="480px"
              contentWeight="500"
              gap="20px"
            />
          </ContentStyle>
          <Link color={"#000"} href={"/blog/create"}>
            Create your own post
          </Link>
          {startAnimation && (
            <Posts_style id="posts">
              {error && <h1 style={{ color: "black" }}>ERROR...</h1>}
              {loading && <h1 style={{ color: "black" }}>LOADING...</h1>}
              {!loading &&
                value?.docs.map((value, index) => {
                  // console.log(value.data());
                  return (
                    <Post
                      id={value.id}
                      url={""}
                      avatar={""}
                      name={""}
                      content={""}
                      header={""}
                      date={""}
                      {...value.data()}
                      key={index}
                    />
                  );
                })}
            </Posts_style>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="next" text="Next" />
          </div>
        </ContainerStyle>
        <Footer />
      </DivStyle>
    </AuthDetails>
  );
}
