import React from "react";

import RemarkDetails from "./RemarkDetails";

const RemarkList = ({ remarks }) => {
  return (
    <div className="remark-list section">
      {remarks &&
        remarks.map(remark => {
          return <RemarkDetails remark={remark} key={remark.id} />;
        })}
    </div>
  );
};

export default RemarkList;
