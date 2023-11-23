"use client";
import NextImage from "next/image";

export const HeaderImage = () => (
  <NextImage
    loader={({ width }) => {
      if (width > 1024) {
        return "/desktop.png";
      }
      return "/mobile.png";
    }}
    src="/desktop.png"
    alt=""
    fill
  />
);
