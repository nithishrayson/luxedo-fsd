import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import TopSelling from "./components/TopSelling/TopSelling";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection/>
      <NewArrivals/>
      <div className="section-divider mx-auto my-4"></div>
      <TopSelling/>
    </Router>
  );
};

export default App;
