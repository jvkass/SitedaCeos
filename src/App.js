import React, { Component } from 'react';
import './App.css';

import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js'
import Sobre from './components/Sobre/Sobre.js';
import Faq from './components/Faq/Faq.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Sobre/>
        <Faq/>
        <Footer/>
      </div>
    );
  }
}

export default App;
