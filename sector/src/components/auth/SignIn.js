import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
        <form
          onSubmit={this.handleSubmit}
          className="white"
          style={{ padding: 20, marginTop: 60 }}
        >
          <h5 className="blue-grey-text text-darken-4">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              className="validate"
            />
          </div>
          <div className="input-field">
            <button className="btn red accent-3 white-text z-depth-0">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
