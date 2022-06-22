import React from "react";

//components
import Header from "./components/Header/";
import HeroSection from "./components/HeroSection/";
import Gallery from "./components/Gallery/";

//styles
import "./App.css";

function App() {
  return (
    <div className="agency__wrapper">
      <Header />
      <HeroSection />
      <Gallery />
    </div>
  );
}

export default App;
