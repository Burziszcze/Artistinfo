import React from 'react';

const SearchBox = (props) => {

  return (
    <div className="col-sm-12 col-lg-6 col-lg-1">
      <form onSubmit={props.onSubmit} className="mx-2 my-auto d-inline">
        <label htmlFor="searchbox-input">Type your favourite band ...</label>
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text input-style"><i className="fas fa-search"></i></span>
          </div>
          <input
            value={props.value}
            onChange={props.onChange}
            type="text"
            className="input-group-lg form-control form-control-lg input-style"
            placeholder="e.g. Slayer..."
            id="searchbox-input"
            autoComplete='off'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;