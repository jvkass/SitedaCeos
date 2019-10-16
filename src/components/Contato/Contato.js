import React, { Component } from 'react';
import './Contato.css';
/*import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';*/
export default class Contato extends React.Component {

    render(){
        return(
            <section className="formulario">
            <div>
            <h1>Entre em contato!</h1> 
            <form  className="form" name="formteste" action="" method="post">
             
                <input className="fild" type="text" name="nome" value="Nome" required="required"></input>
                <input  className="fild" type="text" name="email" value="Email" required="required"></input>
                <input className="fild" type="text" name="assunto" value="assunto" required="required" ></input>
                <textarea className="fild" name="mensagem" value="Sua mensagem"></textarea>
                <input className="fild" type="submit" name="enviar" value="enviar"></input>
                    
            </form>
             </div>
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