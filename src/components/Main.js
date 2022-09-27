import React from "react";

// data
import { hero } from "../data";

// component
import Stats from "./Stats";

const Main = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section className="h-full max-h-[750px] w-full bg-hero bg-riht lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28">
      <div className="container mx-auto text-center">
        {/* title */}
        <h1 className="text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]">
          {title}
        </h1>
        {/* subtitle */}
        <h2 className="mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl">
          {subtitle}
        </h2>
        {/* button */}
        <button className="px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[160px] lg:mb-[194px] text-xl rounded-md bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] backdrop-blur-md transition">
          {buttonText}
        </button>
        {/* stats */}
        <div className="-top-[50px] relative">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Main;
