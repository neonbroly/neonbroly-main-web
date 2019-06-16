import React, { Component } from "react";

class Approve extends Component {
  state = {
    approve: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <button className="btn green white-text z-depth-0">Approve</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Approve;
