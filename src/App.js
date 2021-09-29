import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Consumer from "./Consumer";
import ExperienceSection from "./ExperiencesSection";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Consumer />
      <ExperienceSection />
    </Router>
  );
};

export default App;
