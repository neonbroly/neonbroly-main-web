import React, { Component } from "react";

import AssetDetails from "../asset/AssetDetails";
import CreateRemark from "../remark/CreateRemark";
import RemarkList from "../remark/RemarkList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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
  console.log(state);
  return {
    remarks: state.remark.remarks
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "remarks-main" }])
)(Dashboard);
