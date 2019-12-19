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
    api.patchVotes(this.props.id, value);
  };
  render() {
    return (
      <div className="btn-group">
        <button
          className={this.state.newVote > 0 ? "selected-plus" : "btn pointer"}
          onClick={this.handleClick}
          value={1}
          disabled={this.state.newVote > 0}
        >
          +
        </button>
        <button
          className={this.state.newVote !== 0 ? "btn-bold" : "btn"}
          disabled={true}
        >
          {this.props.votes + this.state.newVote}
        </button>
        <button
          className={this.state.newVote < 0 ? "selected-minus" : "btn pointer"}
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
