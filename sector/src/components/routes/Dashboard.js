import React, { Component } from "react";

import AssetList from "../asset/AssetList";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { assets } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <AssetList assets={assets} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    assets: state.asset.assets
  };
};

export default connect(mapStateToProps)(Dashboard);
