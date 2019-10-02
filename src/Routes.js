import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import Home from './components/Home/Home.js';
import Sobre from './components/Sobre/Sobre.js';
import Faq from './components/Faq/Faq.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Servico from './components/Servico/Servico.js';
import Contato from './components/Contato/Contato.js';

export default props => (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='home' component={Home}/>
        <Route path='sobre' component={Sobre}/>
        <Route path='servico' component={Servico}/>
        <Route path='portfolio' component={Portfolio}/>
        <Route path='FAQ' component={Faq}/>
        <Route path='contato' component={Contato}/>

        <Redirect from='*' to ='/home'/>
    </Router>
)