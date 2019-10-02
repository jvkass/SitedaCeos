import React, {Component} from 'react';

import './Home.css'

import header_background from '../../images/header/header_background.png';

const Home = () => {
  return(
    <div className="Home">
    

      <div className="container">
        <p className="title"> CEOS </p>
        <p>Empresa Júnior da <br/> Computação - UFC</p>
        <div className="spacer"></div>
        <a href="#" className="orcamento">Faça seu orçamento!</a>
      </div>
      <img src={header_background} className="background"/>
    </div>
  );
}

export default Home;