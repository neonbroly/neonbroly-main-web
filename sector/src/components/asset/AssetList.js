import React from "react";

import AssetSummary from "./AssetSummary";

const AssetList = ({ assets }) => {
  return (
    <div className="asset-list section">
      {assets &&
        assets.map(asset => {
          return <AssetSummary asset={asset} key={asset.id} />;
        })}
    </div>
  );
};

export default AssetList;
