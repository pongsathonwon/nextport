export type TailwindBaseColor =
  | "deluge"
  | "white"
  | "black"
  | "red"
  | "blue"
  | "amber"
  | "primary"
  | "secondary"
  | "neutral";

export type TailwindClassColor<T extends string> =
  | `${T}`
  | `${T}/${number}`
  | `${T}-${number}`
  | `${T}-${number}/${number}`;

export type TailwindColorful = "bg" | "text" | "border";

export type CombineTailwindColor<
  T extends TailwindColorful,
  K extends TailwindBaseColor
> = `${T}-${TailwindClassColor<K>}`;

export type Framework = "angular" | "react" | "typescript" | "firebase";

export type ChipData = {
  framework: Framework;
  color: string;
};

type Img = {
  path: string;
  alt: string;
};

type ImgFormat = {
  desktop: Img;
  mobile: Img;
};

export type CardData = {
  id: string;
  title: string;
  content: string;
  tags: ChipData[];
  img: ImgFormat;
};
