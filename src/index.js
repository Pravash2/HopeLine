import React from "react";
import ReactDOM from "react-dom";

import Map2 from "./map";
import SearchBar from "./searchBar";

import "./styles.css";
import "./leaflet.css";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Map2 style={{ display: "flex" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
