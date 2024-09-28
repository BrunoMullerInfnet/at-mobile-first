import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="header-content" id="inicio">
      <nav className="navegar">
        <img
          src="src/assets/menu-icon.png"
          alt="Botão de menu"
          title="Botão de menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
        {menuOn && (
          <div className="menu-dropdown">
            <a href="#inicio" onClick={toggleMenu}>
              Início
            </a>
            <a href="#propostas" onClick={toggleMenu}>
              Propostas
            </a>
            <a href="#noticias" onClick={toggleMenu}>
              Notícias
            </a>
            <a href="#historia" onClick={toggleMenu}>
              História
            </a>
            <a href="#agenda" onClick={toggleMenu}>
              Agenda
            </a>
          </div>
        )}
      </nav>

      <div className="div-logo">
        <img
          src="src/assets/logo-icon.png"
          alt="Logo"
          title="Logo"
          className="logo-icon"
        />
      </div>
      <div className="menu-desktop">
        <ul>
          <li>
            <a href="#propostas">Propostas</a>
          </li>
          <li>
            <a href="#noticias">Notícias</a>
          </li>
          <li>
            <a href="#historia">História</a>
          </li>
          <li>
            <a href="#agenda">Agenda</a>
          </li>
        </ul>
      </div>
      <a href="https://wa.me/5511999999999" target="blank">
        <img
          src="src/assets/zap.png"
          alt="Whatsapp"
          title="Contato"
          className="zap"
        />
      </a>
    </div>
  );
};

export default Header;
