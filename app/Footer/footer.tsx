import { Logo } from "../firstSection/logo";
import { Facebook } from "./facebook";
import { Insta } from "./insta";
import { Twitter } from "./twitter";
import { Content } from "./content";
import { FooterEmail } from "./footerEmail";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const style = {
  display: " flex",
  width: "100%",
  backgroundColor: "#252B3B",
  color: "#FFF",
  fontFamily: "'Karla', sans-serif",
  lineHeight: "27px",
  fontSize: "14px",
  fontWeight: "500",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "55px",
};

const container = {
  display: "flex",
  margin: "0px",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1440px",
  position: "relative",
  padding: "0px",
  justifyContent: "center",
  boxShadow: "none",
};
const email = {
  display: "flex",
  flexDirection: "column",
  gap: "17px",
};

export const Footer = () => {
  return (
    <Box style={style} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={container}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
          }}
          item
          xs={3}
        >
          <div style={{ paddingBottom: "29.5px" }}>
            <Logo color="white" />
          </div>
          <Insta />
          <Facebook />
          <Twitter />
          <Insta />
          <Facebook />
          <Twitter />
        </Grid>
        <Grid item xs={1}>
          <Content
            header="Use cases"
            p1="UI Design"
            p2="UX Design"
            p3="Prototyping"
            p4="UI Design"
            p5="UX Design"
            p6="Prototyping"
          />
        </Grid>
        <Grid item xs={1.5}>
          <Content
            header="Explore"
            p1="Figma"
            p2="Customers"
            p3="Why I Love Figma"
            p4="Figma"
            p5="Customers"
            p6="Why I Love Figma"
          />
        </Grid>
        <Grid item xs={2}>
          <Content
            header="Resources"
            p1="Community Resources Hub"
            p2="Support"
            p3="Education"
            p4="Community Resources Hub"
            p5="Support"
            p6="Education"
          />
        </Grid>
        <Grid item xs={3.5}>
          <div style={email}>
            <h1 style={{ fontWeight: "600", fontSize: "18px" }}>
              Subscribe to our newsletter
            </h1>
            <FooterEmail />
          </div>
        </Grid>
      </Grid>
    </Box>
    // <div style={style}>
    //   <div style={container}>
    //     <div style={logos}>
    //       <div
    //         style={{
    //           paddingBottom: "38px",
    //           display: "flex",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Logo color="white" />
    //       </div>
    //       <Insta />
    //       <Facebook />
    //       <Twitter />
    //       <Insta />
    //       <Facebook />
    //       <Twitter />
    //     </div>
    //     <div style={content}>
    //       <Content
    //         header="Use cases"
    //         p1="UI Design"
    //         p2="UX Design"
    //         p3="Prototyping"
    //         p4="UI Design"
    //         p5="UX Design"
    //         p6="Prototyping"
    //       />
    //       <Content
    //         header="Explore"
    //         p1="Figma"
    //         p2="Customers"
    //         p3="Why I Love Figma"
    //         p4="Figma"
    //         p5="Customers"
    //         p6="Why I Love Figma"
    //       />
    //       <Content
    //         header="Resources"
    //         p1="Community Resources Hub"
    //         p2="Support"
    //         p3="Education"
    //         p4="Community Resources Hub"
    //         p5="Support"
    //         p6="Education"
    //       />
    //     </div>
    //     <div style={email}>
    //       <h1 style={{ fontWeight: "600", fontSize: "18px" }}>
    //         Subscribe to our newsletter
    //       </h1>
    //       <FooterEmail />
    //     </div>
    //   </div>
    // </div>
  );
};
