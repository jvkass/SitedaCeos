import React, { Component } from 'react';
import './Contato.css';
/*import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';*/
export default class Contato extends React.Component {
    state = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
    }

    handleNomeChange = (event) => {
        this.setState({ name: event.target.value });
      };
      
    handleEmailChange = event => {
        this.setState({ email: event.target.value });
      };
      
    handleAssuntoChange = event => {
        this.setState({ meal: event.target.value });
      };

    handleMensagemChange = event => {
        this.setState({ meal: event.target.value });
      };

    handleSubmit = event => {
        event.preventDefault();
        alert(JSON.stringify(this.state, null, 2));
      };

    render(){
        return(
        <section className="formulario">
            <h1 className="titulo1">Entre em contato!</h1> 
            <form  className="form" onSubmit={this.handleSubmit} >
                <fieldset>
                <input 
                    className="fild1" 
                    type="text" 
                    name="nome" 
                    value={this.state.nome} 
                    value="nome"
                    onChange="{this.handleNomeChange}">
                </input>
                <input  
                    className="fild1" 
                    type="text" 
                    name="email" 
                    value={this.state.email} 
                    value="email"
                    onChange="{this.handleEmailChange}">
                 </input>
                </fieldset>
                <input 
                    className="fild2" 
                    type="text" 
                    name="assunto" 
                    value={this.state.assunto} 
                    value="assunto"
                    onChange="{this.handleAssuntoChange}">
                </input>
                <input 
                    className="fild2" 
                    name="mensagem" 
                    value={this.state.mensagem} 
                    value="Sua mensagem!"
                    onChange="{this.handleMensagemChange}">
                </input>
                <input 
                    className="fild2" 
                    type="submit" 
                    name="enviar" 
                    value="enviar">
                </input>      
            </form>
            <h1 className="titulo2">Ou venha nos visitar!</h1> 
            </section>
        
        );
    }

}
/* ISSO FICARIA DENTRO DO RETURN
<Map google={this.props.google} zoom={14}>
<Marker onClick={this.onMarkerClick}
 name={'Current location'} />

<InfoWindow onClose={this.onInfoWindowClose}>
<div>
<h1>{this.state.selectedPlace.name}</h1>
</div>
</InfoWindow>
</Map>
--------------------------------------------------------
export default GoogleApiWrapper({
    apiKey: ("AIzaSyD27oZdGOgqIQ7lThMZ4xhp_zmkApFigEE")
  })(Contato);
  */