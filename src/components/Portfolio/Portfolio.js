import React, {Components} from 'react';
import imagem1 from './imagens/im1.jpeg';
import imagem2 from './imagens/im2.jpg';
import imagem3 from './imagens/im3.jpg';
import imagem4 from './imagens/im4.jpg';
import imagem5 from './imagens/im5.jpeg';
import imagem6 from './imagens/im6.jpg';

import './Portfolio.css';
//recebe uma props titulo que diz qual o titulo a ser exibido
const TituloPort = (props) =>{
  return(
    <div id="titulo">
      <h2>{props.titulo}</h2>
    </div>
    );
}

function MenuPort(){
  return(
    <div id="menu">
      <div id="botoes">
        <button>Todos</button>
        <button>Sites</button>
        <button>Aplicativos</button>
        <button>Sistemas</button>
      </div>
    </div>
  );
}


function GaleriaPort(){
  return(
      <div id="galeria">
        <div id="primeiraLinha">
          <img src={imagem1} className="img" alt="imagem 1"/>
          <img src={imagem2} className="img" alt="imagem 2"/>
          <img src={imagem3} className="img" alt="imagem 3"/>
        </div>
        <div id="segundaLinha">
          <img src={imagem4} className="img" alt="imagem 4"/>
          <img src={imagem5} className="img" alt="imagem 5"/>
          <img src={imagem6} className="img" alt="imagem 6"/>
        </div>
    </div>
    );
}

function Portfolio(){
  return(
    <div id="portfolio">
       <TituloPort titulo="Portfólio"/>
       <MenuPort/>
       <GaleriaPort/>
    </div>
   );
}


export default Portfolio;

