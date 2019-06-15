import React, { Component } from "react";

import AssetList from "../submit/AssetList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <AssetList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
