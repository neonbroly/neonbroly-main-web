import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AssetDetails from "./components/asset/AssetDetails";
import SignIn from "./components/auth/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/asset/:id" component={AssetDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
