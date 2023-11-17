import { Content } from "../components/Content/content";
import { EmailInput } from "./emailinput";
import { Button } from "../components/Button";

export const Invitation = () => {
  return (
    <div style={{ paddingTop: "0px" }}>
      <Content
        header="Instant collaborations for remote teams"
        content="All in one for your remote team chats, collaboration and track projects"
        headerColor="#FFF"
        contentColor="#FFF"
        headerWidth="514px"
        headerWeight="700"
        contentWidth="323px"
        contentWeight="400"
        gap="25px"
      />
      <div
        style={{
          paddingTop: "70px",
          display: "flex",
          gap: "14px",
        }}
      >
        <EmailInput />
        <Button text="Get Early Access" type="blue" />
      </div>
    </div>
  );
};
