import { Logo } from "../firstSection/logo";
import { Facebook } from "./facebook";
import { Insta } from "./insta";
import { Twitter } from "./twitter";
import { Content } from "./content";
import { FooterEmail } from "./footerEmail";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyBox = styled(Box)({
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
});

const MyGrid = styled(Grid)({
  display: "flex",
  marginTop: "0px",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1155px",
  position: "relative",
  padding: "0px",
  justifyContent: "center",
  boxShadow: "none",
});

const EmailStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "17px",
});

export const Footer = () => {
  return (
    <MyBox sx={{ flexGrow: 1 }}>
      <MyGrid container spacing={2}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "left",
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
        <Grid item xs={1.5}>
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
        <Grid item xs={3}>
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
        <Grid item xs={3}>
          <EmailStyle>
            <h1 style={{ fontWeight: "600", fontSize: "18px" }}>
              Subscribe to our newsletter
            </h1>
            <FooterEmail />
          </EmailStyle>
        </Grid>
      </MyGrid>
    </MyBox>
  );
};
