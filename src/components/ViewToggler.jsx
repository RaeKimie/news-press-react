import React, { Component } from "react";

class ViewToggler extends Component {
  state = { isVisible: true };

  handleClick(event) {
    this.setState(currentState => {
      return {
        isVisible: !currentState.isVisible
      };
    });
  }
  render() {
    const { isVisible } = this.state;
    return (
      <section>
        <button onClick={this.handleClick}>
          {isVisible ? "Show" : "Hide"}
        </button>
      </section>
    );
  }
}

export default ViewToggler;
