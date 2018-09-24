import React, { Component } from 'react';
import BgIMG from '../images/galaxy.jpg';
import SearchBox from './SearchBox';

class Main extends Component {
  constructor(props) {
    super(props);

  }
  fetchData() { }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  };
  handleChange(event) {
    event.target.value;
  };
  componentDidMount() {
    document.body.style.backgroundImage = 'url(' + BgIMG + ')';
  }
  render() {
    return (
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="search-box col-xs-12 col-lg-10 offset-lg-1">
              <SearchBox
              />
            </div>
            <div className="artist-card col-xs-12 col-lg-10 offset-lg-1">
              <div className="row">
                <div className="artist-img col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 text-center">
                  <img src="https://lastfm-img2.akamaized.net/i/u/300x300/bfd8d78fd1ab4d04a8fb0a4cd504f7d4.png" alt="kyuss"
                    className="img-fluid"
                  />
                </div>
                <div className="artist-content col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                  <h1>Kyuss</h1>
                  <h4>234234 listeners</h4>
                  <h3>Biography:</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Main;