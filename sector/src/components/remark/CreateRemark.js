import React, { Component } from "react";
import { connect } from "react-redux";
import { createRemark } from "../../store/actions/remarkActions";

class CreateRemark extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createRemark(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="blue-grey-text text-darken-4">Review</h5>
          <div className="input-field">
            <label htmlFor="content">Give remark only if any..</label>
            <textarea
              id="content"
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

const mapDispatchToProps = dispatch => {
  return {
    createRemark: remark => dispatch(createRemark(remark))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateRemark);

// mapStateToProps is theb first parameter
// as it's not there it's need to pass null
