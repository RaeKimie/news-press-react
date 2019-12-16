import React, { Component } from "react";

class SortBy extends Component {
  state = { author: "", topic: "", sort_by: "created_at" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const { author, topic, sort_by } = this.state;
    event.preventDefault();
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
        {/*need to find way to reset select option after submit */}
        Sort by:
        <select onChange={this.handleChange} name="sort_by">
          <option value={this.state.sort_by}>recent</option>
          <option value="votes">popular</option>
          <option value="comment_count">controversial</option>
        </select>
        <button> submit </button>
      </form>
    );
  }
}

export default SortBy;
