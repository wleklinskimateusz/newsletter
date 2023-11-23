import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Welcome to newsletter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} lg:shadow-box lg:bg-Pale-Navy flex h-screen w-screen items-center justify-center bg-white font-roboto text-Dark-Navy `}
      >
        <div className="w-fit rounded-[36px] bg-white">{children}</div>
      </body>
    </html>
  );
}
