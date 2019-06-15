import React from "react";

import CreateRemark from "../remark/CreateRemark";

const AssetDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section asset-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            commodi tenetur libero quia! Quae enim aspernatur cum explicabo
            perferendis. Rem, nam at ab dolorem molestias saepe rerum non totam
            fugit.
          </p>
        </div>
        <div className="card-action blue-grey lighten-5">
          <div className="blue-grey-text text-darken-4">Posted by Subho</div>
          <div className="grey-text">15th October, 12pm</div>
        </div>
      </div>
      <CreateRemark />
    </div>
  );
};

export default AssetDetails;
