import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="What do you want to learn?"
          aria-label="What do you want to learn?"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-outline-primary" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Search;
