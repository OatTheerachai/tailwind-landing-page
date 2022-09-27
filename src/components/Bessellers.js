import React from "react";
import ProductSlide from "./ProductSlide";

const Bessellers = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mt-5 mb-3 text-center text-2xl lg:text-[40px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold">
        Bessellers
      </h1>
      <h2 className="mb-5 text-center text-xl lg:text-[20px] lg:leading-tight mx-auto">
        Top products of a month
      </h2>
      <div className="my-5">
        <ProductSlide />
      </div>
    </div>
  );
};

export default Bessellers;
