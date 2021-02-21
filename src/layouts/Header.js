import React from 'react';
import '../styles/Header.css'
import logo from '../images/logo.svg';
import {Route} from 'react-router-dom'


const Header = () => {
    return ( 
        <div className="head">  
        <img className="App-logo" src={logo} alt="witcherLogo"/>
        <h1>WIEDŹMIN</h1>
        </div>
     );
}
 
export default Header;