import React from 'react';
import lfmlogo from '../../images/Lastfm_logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-content d-flex flex-wrap justify-content-start">
        <img src={lfmlogo} alt="logo" className="logo" />
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className="hd-Header">
          <h2 className="ml-3">ArtistInfo</h2>
        </Link>
      </div>
    </header>
  )
}

export default Header;