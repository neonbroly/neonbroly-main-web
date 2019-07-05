import React, { Component } from "react";

class ReviewForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="container">
            <div className="form-group">
              <label htmlFor="review" className="h5 mb-4 font-weight-normal">
                Review
              </label>
              <textarea
                id="review"
                type="text"
                className="form-control"
                rows="3"
              />
            </div>

            <div className="my-4">
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
