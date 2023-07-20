import React from 'react';
import logo from '../../assets/logo.jpeg';
import CartWidget from '../cartWidget/cartWidget';
import './navBar.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="contenedor-header">
        <img  className='imgNavBar' src={logo} alt="logo" />
        <h1 className="titulo">Tejiendo Sueños</h1>
        <nav className="navbar">
          <a className="navbar-link" href="#">
            Catalogo
          </a>
          <a className="navbar-link" href="#">
            Conocenos
          </a>
          <a className="navbar-link" href="#">
            <CartWidget />
            
          </a>
        </nav>
      </div>
    </header>
  );
};
