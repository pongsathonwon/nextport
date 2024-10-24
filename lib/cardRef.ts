import { CardData } from "./types";

export const cardRef: CardData[] = [
  {
    id: "1",
    title: "golden",
    content:
      "This is web application to serve backoffice management running on Angular. My client, a family gold business, has a pain point from previous software.",
    tags: [{ framework: "angular", color: "chip-red" }],
    img: {
      desktop: {
        path: "./asset/golden/golden1.png",
        alt: "destop placeholder img",
      },
      mobile: {
        path: "./asset/golden/golden2.png",
        alt: "mobile placholder img",
      },
    },
  },
  {
    id: "2",
    title: "Demo ecommerce",
    content:
      "This is my demo project on landing page and backoffice management. Tech stack are react as UI framework and firebase as a backend.",
    tags: [
      { framework: "react", color: "chip-blue" },
      { framework: "firebase", color: "chip-yellow" },
    ],
    img: {
      desktop: {
        path: "./asset/ecommerce/ecommerce1.png",
        alt: "destop placeholder img",
      },
      mobile: { path: "./asset/ecommerce/ecommerce2.png", alt: "" },
    },
  },
  {
    id: "3",
    title: "Demo backoffice",
    content:
      "This is my demo project on CMS. This project focus on manage stocks and users of e-coomerce project. Tech stack are react as UI framework and firebase as a backend.",
    tags: [
      { framework: "react", color: "chip-blue" },
      { framework: "firebase", color: "chip-yellow" },
    ],
    img: {
      desktop: {
        path: "./asset/backoffice/backoffice1.png",
        alt: "destop placeholder img",
      },
      mobile: { path: "./asset/backoffice/backoffice2.png", alt: "" },
    },
  },
] as const;
