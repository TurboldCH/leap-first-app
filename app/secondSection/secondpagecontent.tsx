import { Content } from "../components/Content/content";
import { Learnmore } from "../components/LearnMoreButton/learnmore";

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
}

export const SecondpageContent = () => {
  return (
    <div style={style}>
      <Content
        header="Your Hub for teamwork"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        headerColor="black"
        contentColor="black"
        headerWidth="398px"
        contentWidth="465px"
        gap="30px"
      />
      <Learnmore />
    </div>
  );
};
