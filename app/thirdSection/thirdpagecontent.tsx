import { styled } from "@mui/material";
import { Content } from "../components/Content/content";
import { Learnmore } from "../components/LearnMoreButton/learnmore";

const DivStyle = styled("div")({
  gap: "40px",
  display: "flex",
  flexDirection: "column",
  marginLeft: "700px",
});

export const ThirdPageContent = () => {
  return (
    <DivStyle>
      <Content
        header="Simple task management"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        headerColor="black"
        contentColor="black"
        headerWeight="800"
        contentWeight="500"
        headerWidth="398px"
        contentWidth="465px"
        gap="30px"
      />
      <Learnmore />
    </DivStyle>
  );
};
