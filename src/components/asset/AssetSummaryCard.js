import React, { Component } from "react";

class AssetSummaryCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <blockquote className=" border border-light shadow-sm p-3 mb-5 bg-light rounded-lg">
            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <p>Posted by Subho on 15th October, 12pm</p>
              </footer>
            </blockquote>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default AssetSummaryCard;
