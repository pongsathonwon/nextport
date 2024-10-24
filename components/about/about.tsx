import React from "react";

function About() {
  return (
    <section className="content" id="about">
      <h2 className="h-break">about</h2>
      {/* <!--background--> */}
      <div className="flex flex-col items-center gap-small pb-4 border-bot md:flex-row-reverse justify-between">
        <div className="content-ctrl-t-0 flex-1">
          <h3>background</h3>
          <p className="text-pretty">
            Hi, I'm Pongsathon wongondee, <em>developer</em> based in Bangkok,
            Thailand. Despite medical doctor graduate, I'm passionate about
            programming. With learning mind set, now I'm a frontend
            <em>developer</em>. Let work and deliver delightful software
            together.
          </p>
        </div>
        {/* <!--picture--> */}
        <div className="w-full flex-1 grid grid-cols-3 grid-rows-3">
          <div className="row-span-full col-span-full pb-4 z-10">
            <div className="rounded-full bg-avatar bg-cover mx-auto size-64 md:size-72 z-10 border-8 border-secondary"></div>
          </div>
          <div className="bg-primary-2/10 col-span-full row-start-2 row-span-full rounded-md"></div>
        </div>
      </div>
      {/* <!--edu--> */}
      <div className="flex-res gap-small">
        {/* <!-- edu degree--> */}
        <div className="content-ctrl-t-0 gap-large flex-1 border-bot">
          <h3>education</h3>
          <p className="capitalize">doctor of medicine, mahidol u.</p>
        </div>
        {/* <!--other course--> */}
        <div className="content-ctrl-t-0 gap-large flex-1 border-bot">
          <h3>courses</h3>
          <div className="capitalize">
            <p>web dev bootcamp by Skooldio</p>
            <p>road to data engineer by DATA TH</p>
          </div>
        </div>
        {/* <!--programing lang--> */}
        <div className="content-ctrl-t-0 gap-large flex-1 border-bot">
          <h3>programing</h3>
          <div className="flex flex-row gap-4">
            <i className="fa-brands fa-square-js icon"></i>
            <i className="fa-brands fa-python icon"></i>
          </div>
        </div>
      </div>
      {/* <!--spline content-->
  <div className="hidden max-w-screen-xl aspect-[16/3] sm:block">
    <script
      type="module"
      src="https://unpkg.com/@splinetool/viewer@1.9.26/build/spline-viewer.js"
    ></script>
    <spline-viewer
      url="https://prod.spline.design/e2eNCo-sXDERqEaz/scene.splinecode"
    ></spline-viewer>
  </div> */}
    </section>
  );
}

export default About;
