import React, { Component } from 'react';
import './Contato.css';
/*import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';*/
export default class Contato extends React.Component {

    render(){
        return(
            <section className="formulario">
            <h1 className="titulo1">Entre em contato!</h1> 
            <form  className="form" name="formteste" >
                <fieldset>
                <input className="fild1" type="text" name="nome" value="nome" required="required"></input>
                <input  className="fild1" type="text" name="email" value="e-mail" required="required"></input>
                </fieldset>
                <input className="fild2" type="text" name="assunto" value="assunto" required="required" ></input>
                <input className="fild2" name="mensagem" value="Sua mensagem"></input>
                <input className="fild2" type="submit" name="enviar" value="enviar"></input>
                    
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