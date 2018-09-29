import React from 'react';
import lfmlogo from '../images/Lastfm_logo.svg';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-content d-flex flex-wrap justify-content-start">
        <img src={lfmlogo} alt="logo" className="logo" />
        <h2 className="hd-Header ml-3">ArtistInfo</h2>
      </div>
    </header>
  )
}

export default Header;