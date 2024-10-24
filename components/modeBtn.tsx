"use client";

import React from "react";

function ModeBtn() {
  return (
    <button
      id="theme-btn"
      className="fixed fix-btn bottom-6 rounded-full border border-neutral overflow-hidden bg-secondary lg:size-12"
    >
      <div
        id="theme-indicator"
        className="w-16 h-8 text-xl text-neutral rounded-3xl -translate-x-1/2 flex justify-around items-center lg:w-24 lg:h-12 lg:text-3xl transition-all duration-300"
      >
        <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-sun"></i>
      </div>
    </button>
  );
}

export default ModeBtn;
