import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css";
import Skills from "./components/Skills/Skills.jsx";

const App = () => {
  return (
    <>
      <Navbar />
        <div className="container">
          <Hero />
          <Skills/>
        </div>
    </>
  )
}

export default App