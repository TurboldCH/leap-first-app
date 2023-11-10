import { Logo } from "../firstSection/logo";
import { Facebook } from "./facebook";
import { Insta } from "./insta";
import { Twitter } from "./twitter";
import { Content } from "./content";
import { FooterEmail } from "./footerEmail";

const style = {
  display: " flex",
  padding: "40px 140px 40px 140px",
  backgroundColor: "#252B3B",
  color: "#FFF",
  fontFamily: "'Mulish', sans-serif",
  fontStyle: "normal",
  lineHeight: "27px",
  fontSize: "14px",
  fontWeight: "400",
  justifyContent: "space-between",
};

const media = {
  display: "flex",
  alignItems: "center",
};

const content = {
  display: "flex",
  alignItems: "center",
  paddingTop: "4px",
  gap: "80px",
};
const email = {
  display: "flex",
  flexDirection: "column",
  gap: "17px",
};

export const Footer = () => {
  return (
    <div style={style}>
      <div>
        <Logo color="white"/>
        <Insta />
        <Facebook />
        <Twitter />
        <Insta />
        <Facebook />
        <Twitter />
      </div>
      <div style={content}>
        <Content
          header="Use cases"
          p1="UI Design"
          p2="UX Design"
          p3="Prototyping"
          p4="UI Design"
          p5="UX Design"
          p6="Prototyping"
        />
        <Content
          header="Explore"
          p1="Figma"
          p2="Customers"
          p3="Why I Love Figma"
          p4="Figma"
          p5="Customers"
          p6="Why I Love Figma"
        />
        <Content
          header="Resources"
          p1="Community Resources Hub"
          p2="Support"
          p3="Education"
          p4="Community Resources Hub"
          p5="Support"
          p6="Education"
        />
      </div>
      <div style={email}>
        <h1 style={{fontWeight: "600", fontSize:"18px"}}>Subscribe to our newsletter</h1>
        <FooterEmail />
      </div>
      {/* <Header header1="Use cases" header2="Explore" header3="Resources" />
      <div style={media}>
        <Insta />
        <Paragraph p1="UI Design" p2="Figma" p3="Community Resources Hub" />
      </div>
      <div style={media}>
        <Facebook />
        <Paragraph p1="UX Design" p2="Customers" p3="Support" />
      </div>
      <div style={media}>
        <Twitter />
        <Paragraph p1="Prototyping" p2="Why I Love Figma" p3="Education" />
      </div>
      <div style={media}>
        <Insta />
        <Paragraph p1="UI Design" p2="Figma" p3="Community Resources Hub" />
      </div>
      <div style={media}>
        <Facebook />
        <Paragraph p1="UX Design" p2="Customers" p3="Support" />
      </div>
      <div style={media}>
        <Twitter />
        <Paragraph p1="Prototyping" p2="Why I Love Figma" p3="Education" />
      </div> */}
    </div>
  );
};
