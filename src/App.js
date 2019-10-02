import React, { Component } from 'react';
import './App.css';
import Routes from './Routes.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes/>

        <Footer/>
      </div>
    );
  }
}

export default App;
