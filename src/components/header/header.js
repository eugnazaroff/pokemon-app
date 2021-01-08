import React from 'react';
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <h1 className="logo-text">
                    <a href="/">Pokemon App</a></h1>
            </div>
            <nav className="header__menu">
                <ul className="menu-list">
                    <li className="menu-list__item"><a href="#">Home</a></li>
                    <li className="menu-list__item"><a href="#">Pokemons</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;