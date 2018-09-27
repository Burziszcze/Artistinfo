import React from 'react';
import lfmlogo from '../images/Lastfm_logo.svg';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar-content d-flex flex-wrap justify-content-start">
        <img src={lfmlogo} alt="logo" className="logo" />
        <h2 className="hd-Navbar ml-3">ArtistInfo</h2>
      </div>
    </nav>
  )
}

export default Navbar;