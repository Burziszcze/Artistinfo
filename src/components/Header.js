import React from 'react';
import logo from '../images/Lastfm_logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <p className="u-pull-right hd-title">LastFM Api is have been used for search</p>
      </div>
    </header>
  )
}

export default Header;
