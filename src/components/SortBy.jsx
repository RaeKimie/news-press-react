import React, { Component } from "react";

class SortBy extends Component {
  render() {
    return (
      //no functionality to this yet
      <form>
        <label>
          Search by author:
          <input type="text" />
        </label>
        <select>
          <option value="">hot</option>
        </select>
        <button> submit </button>
      </form>
    );
  }
}

export default SortBy;
