import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="header-content" id="inicio">
      <nav>
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
            <a href="#agenda" onClick={toggleMenu}>Agenda</a>
          </div>
        )}
      </nav>
      <img
        src="src/assets/logo-icon.png"
        alt="Logo"
        title="Logo"
        className="logo-icon"
      />
      <div className="zap-div">
        <a href="">
          <img
            src="src/assets/zap.png"
            alt="Whatsapp"
            title="Contanto"
            className="zap"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
