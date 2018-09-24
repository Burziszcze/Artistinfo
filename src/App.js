import React, { Component } from 'react';
import './styles/App.css';
import BgIMG from './images/galaxy.jpg';

// components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = 'url(' + BgIMG + ')';
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;