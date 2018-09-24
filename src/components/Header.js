import React from 'react';
import lfmlogo from '../images/Lastfm_logo.svg';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-content d-inline-flex">
        <img src={lfmlogo} alt="logo" className="logo" />
        <h2 className="hd-header ml-3">ArtistInfo</h2>
        {/* <p className="hd-title">this app uses data from lastfm api</p> */}
      </div>
    </header>
  )
}

export default Header;