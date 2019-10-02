import React, { Component } from 'react';
import './Faq.css';

export default class Faq extends React.Component {
  state = {
    open1: false,
    open2: false,
    open3: false
  }

  render() {
    return (
      <div>
        <h1 className="any_doubt">Alguma dúvida?</h1>
        <h2 className="check">Confira algumas perguntas frequentes</h2>

        <div className="">
          <button onClick={() => this.setState({open1: !this.state.open1})}>a</button>
          <p className="question">Os serviços são gratuitos?</p>
        </div>
          <p className="answer" style={this.state.open1 ? {display: 'block'} : {display: 'none'}}>Não, pois como toda empresa temos gastos, tanto com contas como para a formação dos membros da empresa. Apesar disso, nossos preços são bem abaixo da média do mercado.</p>

        <div>
          <button onClick={() => this.setState({open2: !this.state.open2})}>a</button>
          <p className="question">Por que optar por uma Empresa Júnior?</p>
        </div>
          <p className="answer" style={this.state.open2 ? {display: 'block'} : {display: 'none'}}>Somos tão competentes quanto as grandes empresas. O grande diferencial é o preço do serviço, que, por ser feito por alunos, é bem mais competitivo e barato. Além do que os alunos estão sempre muito atualizados, por estarem em contato constante com assuntos de tecnologia e aprendendo novos conceitos.</p>

        <div>
          <button onClick={() => this.setState({open3: !this.state.open3})}>a</button>
          <p className="question">A CEOS trabalha com manutenção ou reparo de máquinas?</p>
        </div>
          <p className="answer" style={this.state.open3 ? {display: 'block'} : {display: 'none'}}>Não, trabalhamos apenas com o software, ou seja, apenas desenvolvendo programas sem o manuseio das peças da máquina.</p>

        <a href="#" className="link">Tem mais alguma dúvida? Entre em contato!</a>
      </div>
    );
  }
}