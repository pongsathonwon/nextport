import React from "react";
import { navList } from "./navList";
import Link from "next/link";

function Topbar() {
  return (
    <ul className="hidden md:flex flex-row gap-4">
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
  );
}

export default Topbar;
