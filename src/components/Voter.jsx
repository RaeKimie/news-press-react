import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    newVote: 0
  };
  handleClick = event => {
    const { value } = event.target;
    this.setState(currentState => {
      return {
        newVote: currentState.newVote + +value
      };
    });
    api.patchVotes(this.props.article_id, value);
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          value={1}
          disabled={this.state.newVote > 0}
        >
          +
        </button>
        <h5>{this.props.votes + this.state.newVote}</h5>
        <button
          onClick={this.handleClick}
          value={-1}
          disabled={this.state.newVote < 0}
        >
          -
        </button>
      </div>
    );
  }
}

export default Voter;
