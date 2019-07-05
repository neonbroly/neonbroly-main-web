import React, { Component } from "react";

import ReviewCard from "./ReviewCard";

class ReviewList extends Component {
  render() {
    return (
      <div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    );
  }
}

export default ReviewList;
