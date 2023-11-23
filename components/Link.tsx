import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export const Link = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={`hover:bg-Gradient-1 hover:shadow-color rounded-lg bg-Dark-Navy 
    pb-[14px] pt-[18px] text-center font-bold leading-6 text-white
    ${className || ""}
    `}
    {...props}
  />
);
