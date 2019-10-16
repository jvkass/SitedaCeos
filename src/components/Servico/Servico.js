import React, {Component} from 'react';
import './Servico.css';
import information from '../../images/servicos/information.png';
import code from '../../images/servicos/code.jpg';

const Servico = () => {
    return(
        <section className="servicos">
            <h2>Nossos Serviços</h2>
            <div className="box">

                <p className="titulo">Site</p>
                <div className="box-2">
                    <div id="imagens">
                        <a href="#"><img src={information} alt="Mobile" id="mobile"/></a>
                        <a href="#"><img src={information} alt="Sites" id="sites"/></a>
                        <a href="#"><img src={information} alt="Desktop" id="desktop"/></a>
                        <a href="#"><img src={information} alt="Manutenlão" id="manutencao"/></a>
                    </div>
                    <p className="text">Atualmente, qualquer negócio necessita estar presente na internet e com o desenvolvimento de sites especialiados, na CEOS, vc encontra a melhor oportunidade pra isso!</p>
                    <img src={code} alt="código" id="code"/>
                </div>
            </div>
        </section>
    );
}

export default Servico;