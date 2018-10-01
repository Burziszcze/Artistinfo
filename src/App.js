import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';

// components
import Header from './components/Header';
import Card from './components/Card';
import Tags from './components/Tags';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main role="main" className="container">
            <Header />
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Card}>
            </Route>
            <Route path="/tag/:id" exact component={Tags} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
