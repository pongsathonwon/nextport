"use client";

import React, { useState } from "react";
import { navList } from "./navList";
import Link from "next/link";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="absolute fix-btn top-4 flex flex-col justify-around md:hidden"
      >
        <div
          className={`${
            isOpen ? "absolute translate-y-[.015625rem] rotate-45" : ""
          } shadow-[0_0_0_1px] transition-all duration-300 shadow-white w-full`}
        ></div>
        <div
          className={`${
            isOpen ? "opacity-0" : ""
          } shadow-[0_0_0_1px] transition-all duration-300 shadow-white w-full`}
        ></div>
        <div
          className={`${
            isOpen ? "absolute -translate-y-[.015625rem] -rotate-45" : ""
          } shadow-[0_0_0_1px] transition-all duration-300 shadow-white w-full`}
        ></div>
      </button>
      <div
        id="sidebar"
        className={`absolute top-0 right-0 h-screen backdrop-blur-sm bg-primary bg-opacity-40 z-[1000] inset-2/3 ${
          isOpen ? "" : "translate-x-full"
        } transition-all duration-300 md:hidden`}
      >
        <ul className="flex flex-col gap-4 px-4 pt-16">
          {navList.map(({ label, hash }) => (
            <li key={label}>
              <Link
                className="flex rounded-2xl justify-center p-1 uppercase text-white text-lg md:text-xl lg:text-2xl"
                href={hash}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
