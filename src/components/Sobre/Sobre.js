import React, {Component} from 'react';
import './Sobre.css';

import sobre from '../../images/sobre/sobre.png';

const Sobre = () => {
        return(
            <section className ="sobre">
                <div>
                    <div className = "box-1">
                    <h2>Tecnologia & Criatividade</h2>
                    <p>A <strong>CEOS Jr</strong> é uma empresa jovem e apaixonada por tecnologia. Com 22 anos de experiência no mercado, entregamos soluções que funcionam. A <strong>CEOS</strong> é uma empresa sem fins lucrativos, que tem como foco <strong>desenvolvimento web e mobile</strong>.  Por ser uma Empresa Júnior, contamos com a orientação dos professores e profissionais do Departamento de Computação da Universidade Federal do Ceará.</p>
                    <a href="#">Conheça nossas soluções</a>
                    </div>
                    <img src={sobre} alt="Desenvolvimento Web e Mobile"/>
                </div>
            </section>
        );
}
export default Sobre; 