import React, { Component } from 'react';

const SearchBox = () => {

  return (
    <div className="mt-5 col-sm-12 col-lg-6 col-lg-1">
      <form className="mx-2 my-auto d-inline" autocomplete="false">
        <label htmlFor="searchbox-input">Type your favourite band ...</label>
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text input-style"><i className="fas fa-search"></i></span>
          </div>
          <input
            autocomplete="off"
            type="text"
            className="input-group-lg form-control form-control-lg input-style"
            placeholder="e.g. Slayer..."
            id="searchbox-input"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;