import React from "react";

function Hero() {
  return (
    <section
      className="aspect-[4/3] md:aspect-[16/9] grid grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-9 overflow-hidden justify-end mt-16"
      id="home"
    >
      <div className="flex flex-col justify-center items-center col-start-3 col-span-12 row-span-full md:items-start md:col-start-2 md:col-span-7">
        <h1 className="text-primary-1 capitalize text-2xl md:text-3xl lg:text-5xl">
          pongsathon wongondee
        </h1>
        <p className="text-neutral/60 text-xs mt-2 text-center md:text-start md:text-sm">
          I'm a software developer focusing on website based in Bangkok
          Thailand.
        </p>
        <div>
          <button className="rounded-md bg-primary-1 text-white text-sm py-1 px-3 mt-8 md:text-base">
            resume
          </button>
        </div>
      </div>

      <div className="filter blur-lg -z-20 col-start-1 rounded-full row-start-1 col-span-2 row-span-2 bg-g1 animate-spin-slow"></div>

      <div className="filter blur-lg -z-20 -col-start-7 col-span-3 row-start-2 row-span-3 rounded-full bg-g2"></div>
      <div className="filter blur-lg -z-20 col-start-1 -row-start-3 row-span-2 col-span-2 rounded-tr-full bg-g1 animate-pulse-slow"></div>
      <div className="filter blur-lg -z-20 col-start-8 rounded-full row-start-6 col-span-2 row-span-2 bg-g1 animate-spin-slow-delay5"></div>
      <div className="filter blur-lg -z-20 -col-start-4 col-span-3 -row-start-4 row-span-3 rounded-full bg-g3 animate-spin-slow-delay1"></div>
      {/* <!--background filter--> */}
      <div className="flex opacity-80 col-span-full row-span-full -z-10 filter backdrop-blur-2xl"></div>
    </section>
  );
}

export default Hero;
