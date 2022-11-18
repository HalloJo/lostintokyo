import "./styles/App.scss";
import "./styles/globals.scss";
import "./styles/tachyons.scss";
import "./styles/main.scss";
import React from "react";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import { attractions } from "./data/attractions";
import Attraction from "./components/Attraction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app min-vh-100 ph4 flex flex-column">
      <header className="app-header">
        <Navigation />
        <Intro />
        <div className="flex flex-wrap container">
          {attractions.map((attraction) => {
            return <Attraction {...attraction} key={attraction.title} />;
          })}
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default App;
