import React, { Component } from "react";

class SortBy extends Component {
  state = { author: "", topic: "", sort_by: "created_at", isLoading: false };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const { author, topic, sort_by } = this.state;
    this.setState(
      currentState => {
        return { ...currentState, isLoading: !currentState.isLoading };
      },
      () => {
        console.log(
          this.state,
          "<-setState onSubmit, isLoading:!currentState.isLoading"
        );
      }
    );
    event.preventDefault();
    this.props.addSorter(author, topic, sort_by);
    this.setState(
      {
        author: "",
        topic: "",
        sort_by: "created_at"
      },
      () => {
        console.log(this.state, "<-re-setting state without isLoading:false");
      }
    );
    // this.setState(
    //   currentState => {
    //     return { ...currentState, isLoading: false };
    //   },
    //   () => {
    //     console.log(this.state, "check2");
    //   }
    // );
    //this.setState(currentState => {});
    // this.setState(currentState => {
    //   return {
    //     author: "",
    //     topic: "",
    //     sort_by: "created_at",
    //     isLoading: !currentState.isLoading
    //   };
    // });
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
        {!this.state.isLoading ? (
          <button> submit </button>
        ) : (
          <button disabled={true}> Loading.. </button>
        )}
      </form>
    );
  }
}

export default SortBy;
