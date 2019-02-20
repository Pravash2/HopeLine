import React from "react";
import ReactDOM from "react-dom";
//import Map from "./map2";
import Map2 from './map'
// import SearchBar from "./searchBar";

import "./styles.css";

function App() {
  
  return (
    <div className="App">
     <Map2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
