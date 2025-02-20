import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...rest }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "p-1.5 text-blue bg-gray-500 rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300",
        className
      )}
      {...rest}
    />
  );
}
