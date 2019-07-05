import React, { Component } from "react";

class ReviewForm extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <form>
            <div className="form-group">
              <label htmlFor="review">Review</label>
              <textarea
                id="review"
                type="text"
                className="form-control"
                rows="3"
              />
            </div>

            <div className="mt-4">
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
