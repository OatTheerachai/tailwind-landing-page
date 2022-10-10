import React from "react";

// component
import Items from "./Items";
import Logo from "../assets/img/new-item.jpg";

const NewItem = () => {
  return (
    <section className="w-full bg-gradient-to-r from-accent to-main bg-riht text-black relative mb-12">
      <div className="container mx-auto py-20">
        <div className="flex items-center flex-col lg:flex-row lg:gap-x-[100px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">The Best Fashion</h2>
            <p className="subtitle">
              Ullamco cillum sunt officia ullamco est. Qui in aliqua proident
              occaecat consequat incididunt aliquip ex. Esse velit dolore esse
              magna. Velit reprehenderit dolor aute eiusmod. Exercitation
              officia dolore nostrud et ex veniam eu velit velit ullamco.
              Nostrud irure pariatur culpa cupidatat cupidatat labore ipsum eu
              occaecat ipsum aliqua quis adipisicing. Deserunt aute cupidatat
              irure enim.
            </p>
          </div>
          {/* image */}
          <div className="flex-1">
            <img src={Logo} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItem;
