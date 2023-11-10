import { Content } from "../components/Content/content";
import { Learnmore } from "../components/LearnMoreButton/learnmore";

const style = {
    gap: "40px",
};

export const FourthPageContent = () => {
  return (
    <div style={style}>
      <Content
        header="Scheduling that actually works"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        color="black"
        headerWidth="398px"
        contentWidth="465px"
        gap="30px"
      />
      <Learnmore />
    </div>
  );
};
