import React, { Component } from "react";

import AssetDetails from "../asset/AssetDetails";
import CreateRemark from "../remark/CreateRemark";
import RemarkList from "../remark/RemarkList";

import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { remarks } = this.props;

    return (
      <div className="asset container">
        <AssetDetails />
        <CreateRemark />
        <RemarkList remarks={remarks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    remarks: state.remark.remarks
  };
};

export default connect(mapStateToProps)(Dashboard);
