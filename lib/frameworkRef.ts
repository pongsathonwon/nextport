import { ChipData, Framework } from "./types";

const frameworkRef: Record<Framework, string> = {
  angular: "chip-red",
  react: "chip-blue",
  typescript: "chip-blue",
  firebase: "chip-amber",
};

export const genChip = (framework: Framework) => frameworkRef[framework];
