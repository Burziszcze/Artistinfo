import React, { Component } from 'react';
import './styles/App.css';

// components
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="container">
          <Navbar />
          <Card />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
