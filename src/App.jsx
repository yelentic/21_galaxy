import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/header/Header';
import Policy from './components/poles/Policy';
import Mark_Com from './components/poles/Mark_Com';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/policy" component={Policy} />
          <Route path="/mark_com" component={Mark_Com} />
        </div>
      </Router>
    );
  }
}

export default App;
