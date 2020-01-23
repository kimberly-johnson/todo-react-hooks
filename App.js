import React from "react";
import Nav from "./Nav";
import "../App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO, TA DA</h1>
      </header>
      <h3>Select or add a list to start adding items to do.</h3>
      <Nav />
    </div>
  );
}
