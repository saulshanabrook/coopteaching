import React, { Component } from "react";
import "./App.css";

import InputCard from "./InputCard";
import Cards from "./Cards";
class App extends Component {
  render() {
    return (
      <div className="App">
        <InputCard />
        <Cards />
      </div>
    );
  }
}

export default App;
