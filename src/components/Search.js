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
              <label htmlFor="searchinput">Search for artist...</label>
              <input
                ref="search suggestion"
                onClick={this.handleChange}
                className="searchinput twelve columns"
                type="search"
                placeholder="Kyuss for example..."
              />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Search;