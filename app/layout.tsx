import { Mulish } from "next/font/google";
import { Cabin, Karla } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
const karla = Karla({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
        className={mulish.className + cabin.className + karla.className}
      >
        {children}
      </body>
    </html>
  );
}
