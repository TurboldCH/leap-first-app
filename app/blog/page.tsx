"use client";

import { useState } from "react";
import { Navigation } from "../components/Navigation/navigation";
import { Content } from "../components/Content/content";
import { Avatar } from "./avatar";
import { Overview } from "./overview";
import Image from "next/image";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>;

const style = {
  background: "var(--HP-design-color, #F5F7FA)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  return (
    <div style={style}>
      <Navigation type="blog" />
      <Content
        header="Blog posts"
        content="Our latest updates and blogs about managing your team"
        color="black"
        headerWidth="300px"
        contentWidth="480px"
        gap="20px"
      />
      <Image
        src="/blog1.png"
        alt="Blog"
        width={370}
        height={147}
      />
      <Overview
        header="The Emotional Toll of Being in UX"
        content="There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
      />
      <Avatar url="/wade.png" name="Wade Warren" date="2nd January,2022" />
    </div>
  );
}
