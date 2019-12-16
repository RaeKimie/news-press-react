import React, { Component } from "react";

class SortBy extends Component {
  state = { author: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addSorter(this.state.author);
    this.setState({ author: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search by author:
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </label>
        <button> submit </button>
      </form>
    );
  }
}

export default SortBy;
