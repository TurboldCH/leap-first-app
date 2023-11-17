import { Content } from "../components/Content/content";
import { Learnmore } from "../components/LearnMoreButton/learnmore";

export const FourthPageContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Content
        header="Scheduling that actually works"
        content="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        headerColor="black"
        contentColor="black"
        headerWidth="398px"
        contentWidth="465px"
        headerWeight="800"
        contentWeight="500"
        gap="30px"
      />
      <Learnmore />
    </div>
  );
};
