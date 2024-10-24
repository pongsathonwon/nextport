import { CardData } from "@/lib/types";
import React from "react";
import Chip from "./chip";
import Link from "next/link";
type CardProps = CardData;
function Card({ title, content, tags, img }: CardProps) {
  return (
    <div className="flex-res gap-small justify-between md:odd:flex-row-reverse">
      <div className="grid grid-cols-12 grid-rows-8 p-4 bg-primary-2/10 rounded-md md:w-1/2">
        <div className="col-start-1 col-span-full row-start-1 row-span-11 flex items-center">
          <img
            src={img.desktop.path}
            className="rounded-md shadow-md shadow-primary-2/20"
            alt={img.desktop.alt}
          />
        </div>
        <div className="col-start-10 col-span-full row-start-1 row-span-full flex items-center">
          <img
            src={img.mobile.path}
            className="rounded-md shadow-md shadow-primary-2/20"
            alt={img.mobile.alt}
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="h-full border-bot hover:border-none">
          <Link
            className="rounded-md p-4 border-none h-full flex flex-col hover:bg-primary-2/10"
            href={`/blogs/${title}`}
          >
            <h4>{title}</h4>
            <p className="mt-2 mb-4">{content} Click to see more.</p>

            <div className="flex flex-row justify-end items-center gap-2 mt-auto">
              {tags.map(({ framework, color }) => (
                <Chip
                  key={title + framework}
                  framework={framework}
                  color={color}
                />
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
