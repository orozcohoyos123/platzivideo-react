import React from 'react';
import '../assets/styles/components/Header.scss';

const headerNavMainText = 'Perfil';
const headerNavAccountText = 'Cuenta';
const headerNavLogOut = 'Cerrar Sesión';

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src="../assets/logo-platzi-video-BW2.png"
      alt="Platzi Video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../assets/user-icon.png" alt="" />
        <p>{headerNavMainText}</p>
      </div>
      <ul>
        <li>
          <a href="/">{headerNavAccountText}</a>
        </li>
        <li>
          <a href="/">{headerNavLogOut}</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
