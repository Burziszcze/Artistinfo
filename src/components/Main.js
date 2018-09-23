import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="card">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <div className="card-content">
                <div className="five columns">
                  <img src="https://lastfm-img2.akamaized.net/i/u/300x300/bfd8d78fd1ab4d04a8fb0a4cd504f7d4.png" alt="kyuss" />
                </div>
                <div className="seven columns">
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