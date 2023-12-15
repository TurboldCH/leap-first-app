"use client";
import { Navigation } from "../../components/Navigation/navigation";
import { styled } from "@mui/material";
import { Footer } from "../../Footer/footer";
import { Avatar } from "../avatar";
import Image from "next/image";
import { Content } from "../../components/Content/content";
import { WrittenBy } from "./writtenBy";
import { Comments } from "./comments";
import AuthDetails from "@/app/authentication/AuthDetails";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/app/firebase";

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
  //   alignItems: "center",
  flexDirection: "column",
  margin: "0, auto",
  maxWidth: "1650px",
  position: "relative",
  paddingBottom: "140px",
});
const ContentStyle = styled("div")({
  padding: "96px 0px 64px 0px",
});
export default function PostDetail({
  header,
  avatar,
  name,
  content,
  date,
  url,
  contentDetail,
  id,
  postId,
}: {
  id: string;
  url: string;
  header: string;
  content: string;
  avatar: string;
  name: string;
  date: string;
  contentDetail: string;
  postId: string;
}) {
  //Comment ID
  const [commentsValue] = useCollection(
    collection(getFirestore(firebaseApp), `blog/${postId}/comments`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  console.log(commentsValue?.docs);
  return (
    <AuthDetails>
      <DivStyle>
        <ContainerStyle>
          <Navigation type="blog" />
          <ContentStyle
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Content
              header={header}
              content={content}
              headerColor="black"
              contentColor="#6D7D8B"
              headerWeight="800"
              headerWidth="700px"
              contentWidth="480px"
              contentWeight="500"
              gap="20px"
            />
            <Avatar url={avatar} name={name} date={date} />
            <Image
              style={{ padding: "60px 0 60px 0" }}
              src={url}
              alt="Blog"
              width={1000}
              height={450}
            />
            <div
              style={{
                fontFamily: "'Mulish', sans-serif",
                fontSize: "18px",
                width: "700px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "163.15%",
                color: "#25313C",
              }}
            >
              {contentDetail}
            </div>
            <WrittenBy pic={avatar} name={name} />
            <div
              style={{
                display: "flex",
                width: "700px",
                border: "1px solid rgba(109, 125, 139, 0.22)",
                margin: "83px 0 52px 0",
              }}
            ></div>
            {commentsValue?.docs.map((value, index) => {
              console.log(value.data());
              return <div>{value.data().comment}</div>;
            })}
            <Comments />
          </ContentStyle>
        </ContainerStyle>
        <Footer />
      </DivStyle>
    </AuthDetails>
  );
}
