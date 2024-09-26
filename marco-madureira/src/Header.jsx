import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="header-content">
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
            <a href="Início">Início</a>
            <a href="Propostas">Propostas</a>
            <a href="Notícias">Notícias</a>
            <a href="História">História</a>
          </div>
        )}
      </nav>
      <img
        src="src/assets/logo-icon.png"
        alt="Logo"
        title="Logo"
        className="logo-icon"
      />
      <a href="">
        <img
          src="src/assets/zap.png"
          alt="Whatsapp"
          title="Contanto"
          className="zap"
        />
      </a>
    </div>
  );
};

export default Header;
