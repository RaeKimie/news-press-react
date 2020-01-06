import React, { Component } from "react";
import { fetchAllTopics } from "../utils/api";
import TopicCard from "./TopicCard";

class SortBy extends Component {
  state = { author: "", topic: "", sort_by: "created_at", topics: [] };

  componentDidMount() {
    this.getTopics();
  }
  getTopics = () => {
    fetchAllTopics().then(topics => {
      this.setState(() => {
        return { topics };
      });
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(currentState => {
      return { [name]: value };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { author, topic, sort_by } = this.state;
    this.props.addSorter(author, topic, sort_by);
    this.setState(() => {
      return { author: "" };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar">
        <label>
          Search by Author:
          <input
            type="text"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
            className="space-left space-right margin-top"
          />
        </label>
        Topic:
        <select
          onChange={this.handleChange}
          name="topic"
          className="space-left space-right"
        >
          <option value={this.state.topic}>---</option>
          {this.state.topics.map(topic => {
            return <TopicCard key={topic.slug} topic={topic.slug} />;
          })}
        </select>
        Sort by:
        <select
          onChange={this.handleChange}
          name="sort_by"
          className="space-left space-right"
        >
          <option value={this.state.sort_by}>recent</option>
          <option value="votes">popular</option>
          <option value="comment_count">controversial</option>
        </select>
        <button disabled={this.props.isSorting} className="button left">
          {!this.props.isSorting ? "Submit" : "Loading.."}
        </button>
      </form>
    );
  }
}

export default SortBy;
