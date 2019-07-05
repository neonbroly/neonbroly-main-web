import React, { Component } from "react";

import AssetSummaryCard from "./AssetSummaryCard";

class AssetList extends Component {
  render() {
    return (
      <div className="container">
        <AssetSummaryCard />
        <AssetSummaryCard />
        <AssetSummaryCard />
        <AssetSummaryCard />
      </div>
    );
  }
}

export default AssetList;
