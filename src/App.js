import React from "react";

// component
import Header from "./components/Header";
import Main from "./components/Main";
import Brand from "./components/Brand";
import Bessellers from "./components/Bessellers";
import Categories from "./components/Categories";
import Trends from "./components/Trends";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full mx-auto bg-white">
      <Header />
      <Main />
      <Brand />
      <Bessellers />
      <Categories />
      <Trends />
      <Footer />
    </div>
  );
};

export default App;
