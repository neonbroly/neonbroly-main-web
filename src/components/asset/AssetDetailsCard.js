import React, { Component } from "react";

class AssetDetailsCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="border border-light shadow-sm p-3 mb-5 bg-light rounded-lg">
            <p className="container h5 font-weight-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <p className="container font-weight-light">
              Posted by Subho on 15th October, 12pm
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AssetDetailsCard;
