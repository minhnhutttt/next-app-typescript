import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const noto = Noto_Sans({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="html" className=" no-touchevents">
      <body
        className={`${noto.className} `}
      >
         {children}
      </body>
    </html>
  );
}
