import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
//import News from './components/News';
import Navbar from './components/header/Header';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Footer} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
