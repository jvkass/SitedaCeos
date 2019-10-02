import React, {Component} from 'react';

import logo from '../../images/footer/logo_extensa.png';
import facebook from '../../images/footer/facebook.png';
import instagram from '../../images/footer/instagram.png';

import './Footer.css';

export default class Footer extends React.Component {
    render () {
        return(
            <footer className="footer">
                <div className="main">
                    <div className="navigation">
                        <p>Navegação</p>
                        <ul>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Quem somos?</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Fale conosco</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <img src={logo} className="logo"/>
                        <p>ceos.adm@gmail.com</p>
                        <p>(85)XXXXX-XXXX</p>
                        <div className="social-media">
                            <a href="https://www.facebook.com/ceos.jr/" target="_blank"><img src={facebook} className="social-size"/></a>
                            <a href="https://www.instagram.com/ceosjr/" target="_blank"><img src={instagram} className="social-size"/></a>
                        </div>
                    </div>
                    <div className="newsletter">
                        <p>Newsletter</p>
                        <input type="text" name="email" placeholder="E-mail" required/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="reserved">
                    <p>Ⓒ CEOS Jr. Todos os direitos reservados</p>
                </div>
                <div className="developed">
                    <p>Developed with <span className="heart">❤</span> by CEOS</p>
                </div>
            </footer>
        )
    }
}