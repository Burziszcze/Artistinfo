import React, { Component } from 'react';
// import ReactDOM from "react-dom";

class Search extends Component {
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <nav className="searchbox">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <input
                ref="search suggestion"
                onClick={this.handleChange}
                className="searchinput u-full-width"
                type="search"
                placeholder="Search Artist name..."
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Search;