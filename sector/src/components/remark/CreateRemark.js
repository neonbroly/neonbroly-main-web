import React, { Component } from "react";

class CreateRemark extends Component {
  state = {
    remark: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="blue-grey-text text-darken-4">Review</h5>
          <div className="input-field">
            <label htmlFor="remark">Give remark only if any..</label>
            <textarea
              id="remark"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn red accent-3 white-text z-depth-0">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRemark;
