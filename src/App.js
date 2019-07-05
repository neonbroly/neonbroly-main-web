import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import SignIn from "./components/routes/SignIn";
import Dashboard from "./components/routes/Dashboard";
import Asset from "./components/routes/Asset";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/asset" component={Asset} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
