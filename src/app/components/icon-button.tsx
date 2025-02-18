import type { ComponentProps } from "react";

export interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-1.5 text-blue bg-gray-500 rounded-xl cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props}
    />
  );
}
