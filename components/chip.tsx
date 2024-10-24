import { ChipData, Framework } from "@/lib/types";
import React from "react";

type ChipPros = ChipData;

const frameworkRef: Record<Framework, string> = {
  angular: "chip-red",
  react: "chip-blue",
  typescript: "chip-blue",
  firebase: "chip-yellow",
};

export const genChip = (framework: Framework) => frameworkRef[framework] ?? "";

function Chip({ framework }: ChipPros) {
  return <div className={`chip ${genChip(framework)}`}>{framework}</div>;
}

export default Chip;
