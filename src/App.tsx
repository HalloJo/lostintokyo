import "./styles/App.scss";
import "./styles/globals.scss";
import "./styles/tachyons.scss";
import "./styles/main.scss";
import React from "react";
import logo from "./assets/logo.svg";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Navigation />
        <img src={logo} className="app-logo" alt="logo" />
        <Intro />
      </header>
    </div>
  );
};

export default App;
