import React from "react";

const AssetSummary = ({ asset }) => {
  return (
    <div className="card z-depth-0 asset-summary">
      <div className="card-content blue-grey-text text-darken-4">
        <span className="card-title">{asset.title}</span>
        <p className="blue-grey-text text-darken-4">Posted by Subho</p>
        <p className="grey-text">15th October, 12pm</p>
      </div>
    </div>
  );
};

export default AssetSummary;
