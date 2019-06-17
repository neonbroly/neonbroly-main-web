import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/routes/Dashboard";
import AssetDetails from "./components/asset/AssetDetails";
import SignIn from "./components/auth/SignIn";
import Asset from "./components/routes/Asset";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/asset/:id" component={AssetDetails} />
          <Route path="/asset" component={Asset} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
