import React from "react";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import "./styles/globals.scss";
import "./styles/tachyons.scss";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Lost in Tokyo</h1>
      </header>
    </div>
  );
};

export default App;
