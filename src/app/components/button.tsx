import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex items-center justify-between h-12 px-5 text-blue bg-gray-500 font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  );
}
