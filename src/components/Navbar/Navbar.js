import React, {Component} from 'react';
import nav_logo from '../../images/nav/nav_logo.png';
import nav_logo_grey from '../../images/nav/nav_logo_grey.png';
import bars from '../../images/nav/bars.png';
import './Navbar.css';

export default class Navbar extends React.Component {

  state = {
    visible: false,
    color: '#cecece',
    logoVisible: false
  }

  changeOnScroll = () => {
    const navColor = document.getElementById("navbar");

    if (window.scrollY < 50) {
      navColor.classList.remove('navbar-scroll');
      this.setState({color: '#cecece'});
      this.setState({logoVisible: true})
    } else {
      navColor.classList.add('navbar-scroll');
      this.setState({color: '#195382'});
      this.setState({logoVisible: false})
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.changeOnScroll)
  }

  render() {

    const styles = {
      colorText: {
        color: this.state.color,
      }
    };

    const {colorText} = styles;

    return (
      <div>
        <nav className="navbar" id="navbar">

          {/*ITEMS NAVBAR MOBILE*/}
          <div className="navbar_items_responsive" style={this.state.visible ? {display: 'block'} : {display: 'none'}}>
            <ul> 
              <li><a href="#" className="first-item">SOBRE NÓS</a></li>
              <li><a href="#">SERVIÇOS</a></li>
              <li><a href="#">PORTFÓLIO</a></li>
              <li><a href="#">CONTATO</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </div>

          {/*BOTÃO P/ ABRIR NAVBAR QUANDO EM MOBILE*/}
          <div className="navbar_toggle" onClick={() => this.setState({ visible: this.state.visible ? false : true})}>
            <img src={bars}/>
          </div>

          {/*LOGO*/}
          <div className="navbar_logo" style={this.state.logoVisible ? {display: 'none'} : {display: 'block'}}><a href="#"><img src={nav_logo}/></a></div>
          <div className="navbar_logo" style={this.state.logoVisible ? {display: 'block'} : {display: 'none'}}><a href="#"><img src={nav_logo_grey}/></a></div>

          {/*ITEMS NAVBAR*/}
          <div className="navbar_items">
            <ul> 
              <li><a href="#" style={colorText}>SOBRE NÓS</a></li>
              <li><a href="#" style={colorText}>SERVIÇOS</a></li>
              <li><a href="#" style={colorText}>PORTFÓLIO</a></li>
              <li><a href="#" style={colorText}>CONTATO</a></li>
              <li><a href="#" style={colorText}>BLOG</a></li>
            </ul>
          </div>


          <div className="backdrop" 
            style={this.state.visible ? {display: 'block'} : {display: 'none'}}
            onClick={() => this.setState({ visible: this.state.visible ? false : true})}></div>

        </nav>
      </div>
    )
  }
}