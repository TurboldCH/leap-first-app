"use client";
import { Navigation } from "../components/Navigation/navigation";
import { Content } from "../components/Content/content";
import { Post } from "./post";
import { Footer } from "../Footer/footer";
import { Button } from "../components/Button";
import { styled } from "@mui/material";

const DivStyle = styled("div")({
  background: "var(--HP-design-color, #F5F7FA)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const ContainerStyle = styled('div')({
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
  const posts = [
    {
      url: "/blog/blog1.png",
      header: "The Emotional Toll of Being in UX",
      content:
        "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
      avatar: "/blog/wade.png",
      name: "Wade Warren",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog2.png",
      header: "10 secret tips for managing a team remotely",
      content:
        "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
      avatar: "/blog/bessie.png",
      name: "Bessie Cooper",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog3.png",
      header: "What Ever Happened to Steampunk?",
      content:
        "How the iPhone popularized steampunk… and how the iPhone killed it off",
      avatar: "/blog/courtney.png",
      name: "Courtney Henry",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog4.png",
      header: "The 2020 Guide for White Men in Tech",
      content:
        "How to use centuries of unfair advantage to make the world a more equal place",
      avatar: "/blog/darlene.png",
      name: "Darlene Robert",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog5.png",
      header: "Why Are Women Still Behind in the Design World?",
      content:
        "It’s 2020, but women designers still face lower pay and less opportunity. What gives?",
      avatar: "/blog/leslie.png",
      name: "Leslie Alexander",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog6.png",
      header: "The Ultimate Guide to Becoming a Great Designer",
      content:
        "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
      avatar: "/blog/eleanor.png",
      name: "Eleanor Pena",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog7.png",
      header: "Data-Driven Design is Killing Our Instincts",
      content:
        "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team",
      avatar: "/blog/jane.png",
      name: "Jane Cooper",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog8.png",
      header: "Finding the Blank Spots in Big Data",
      content:
        "Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…",
      avatar: "/blog/jenny.png",
      name: "Jenny Wilson",
      date: "2nd January,2022",
    },
    {
      url: "/blog/blog9.png",
      header: "3 Lessons We Learned From Rebranding Gusto",
      content:
        "You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s",
      avatar: "/blog/jacob.png",
      name: "Jacob Jones",
      date: "2nd January,2022",
    },
  ];

  return (
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
        <Posts_style>
          {posts.map((value, index) => {
            return (
              <Post
                url={value.url}
                header={value.header}
                content={value.content}
                avatar={value.avatar}
                name={value.name}
                date={value.date}
                key={index}
              />
            );
          })}
        </Posts_style>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="next" text="Next" />
        </div>
      </ContainerStyle>
      <Footer />
    </DivStyle>
  );
}
