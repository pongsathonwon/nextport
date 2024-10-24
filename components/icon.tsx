import React, { PropsWithChildren } from "react";

type IconProps = {
  size: "small" | "large" | "medium";
} & PropsWithChildren;

function Icon({ size = "small", children }: IconProps) {
  const genSize = (size: "small" | "large" | "medium") => {
    if (size === "small") return "w-4";
    if (size === "medium") return "w-7";
    if (size == "large") return "w-20";
  };
  return (
    <div className={`${genSize(size)} aspect-square text-neutral`}>
      {children}
    </div>
  );
}

export default Icon;
