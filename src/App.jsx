import React from "react";
import GenreMovieLists from "./components/GenreMovieLists";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieLists />
    </div>
  );
};

export default App;
