import React from "react";

const RemarkDetails = ({ remark }) => {
  return (
    <div className="container section asset-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Reviews</span>
          <p>{remark.content}</p>
        </div>
        <div className="card-action blue-grey lighten-5">
          <div className="blue-grey-text text-darken-4">Posted by Subho</div>
          <div className="grey-text">15th October, 12pm</div>
        </div>
      </div>
    </div>
  );
};

export default RemarkDetails;
