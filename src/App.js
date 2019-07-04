import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
