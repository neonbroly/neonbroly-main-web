import React from "react";

import AssetDetailsCard from "../asset/AssetDetailsCard";
import ReviewForm from "../review/ReviewForm";
import ReviewList from "../review/ReviewList";

const Asset = () => {
  return (
    <div>
      <AssetDetailsCard />
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default Asset;
