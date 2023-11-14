import Image from "next/image";
import { Overview } from "./overview";
import { Avatar } from "./avatar";

const style = {
  padding: "0",
  width: "363px",
  height: "440px",
  boxShadow: "20px 20px 50px grey",
  borderRadius: "30px",
  overflow: "hidden",
};

export const Post = ({
  url,
  header,
  content,
  avatar,
  name,
  date,
}: {
  url: string;
  header: string;
  content: string;
  avatar: string;
  name: string;
  date: string;
}) => {
  return (
    <div style={style}>
      <Image src={url} alt="Blog" width={370} height={147} />
      <div style={{ padding: "0 0 19px 34px" }}>
        <Overview header={header} content={content} />
        <Avatar url={avatar} name={name} date={date} />
      </div>
    </div>
  );
};
