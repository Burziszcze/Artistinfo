import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';

// components
import Header from './components/layout/Header';
import Card from './components/Card';
import Tags from './components/Tags';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main role="main" className="container">
            <Header />
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Card}>
            </Route>
            <Route path={process.env.PUBLIC_URL + '/tag/:id'} exact component={Tags} />
            <Route path={process.env.PUBLIC_URL + '/:id'} exact component={Card} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
