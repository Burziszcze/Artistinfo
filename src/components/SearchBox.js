import React from 'react';

const SearchBox = (props) => {

  return (
    <div className="search-box container">
      <form onSubmit={props.onSubmit} className="mx-4 my-4">
        <label htmlFor="searchbox-input">Type your favourite band ...</label>
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text input-style"><i className="fas fa-search"></i></span>
          </div>
          <input
            value={props.value}
            onChange={props.onChange}
            onFocus={(e) => e.target.placeholder = ""}
            type="text"
            className="input-group-lg form-control form-control-lg input-style"
            placeholder="Search for artist..."
            id="searchbox-input"
            autoComplete='off'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;