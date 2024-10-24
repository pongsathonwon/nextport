import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Link from "next/link";

function Header() {
  return (
    <nav className="fixed top-0 left-0 z-[9999] w-full flex-row justify-between items-end flex h-16 bg-primary gap-4 p-4 lg:pr-8">
      <Link
        href="/"
        className="text-2xl md:text-3xl lg:text-4xl capitalize font-semibold"
      >
        <span className="text-black">protfo</span>
        <span className="text-white">lio</span>
      </Link>
      <Topbar />
      <Sidebar />
    </nav>
  );
}

export default Header;
