import React, { Component } from "react";

class SortBy extends Component {
  state = { author: "", topic: "", sort_by: "created_at" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { author, topic, sort_by } = this.state;
    this.props.addSorter(author, topic, sort_by);
    this.setState({ author: "", topic: "", sort_by: "created_at" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search by Author:
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          />
        </label>
        Topic:
        <select onChange={this.handleChange} name="topic">
          <option value={this.state.topic}>---</option>
          <option>cooking</option>
          <option>football</option>
          <option>coding</option>
        </select>
        Sort by:
        <select onChange={this.handleChange} name="sort_by">
          <option value={this.state.sort_by}>recent</option>
          <option value="votes">popular</option>
          <option value="comment_count">controversial</option>
        </select>
        <button disabled={this.props.isSorting}>
          {!this.props.isSorting ? "Submit" : "Loading.."}
        </button>
      </form>
    );
  }
}

export default SortBy;
