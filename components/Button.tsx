import { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`hover:bg-Gradient-1 hover:shadow-color rounded-lg bg-Dark-Navy 
    pb-[14px] pt-[18px] text-center font-bold leading-6 text-white
    ${className || ""}
    `}
    {...props}
  />
);
