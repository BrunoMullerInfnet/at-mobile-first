import { useState, useEffect } from "react";
import "./Conteudo.css";
import Propostas from "./Propostas";
import Noticias from "./Noticias";
import Historia from "./Hisotira";
import Footer from "./Footer";
import Agenda from "./Agenda";

const Conteudo = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="apresentation-card">
        <img
          src="src/assets/politico.png"
          alt="Imagem do Marco Madureira"
          title="Marco Madureiria"
          className="politico"
        />
        <p className="apresentation-text">Transformação já!</p>
      </div>
      <Propostas />
      <Noticias />
      <Historia />
      <Agenda />
      <Footer />
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img
            src="src/assets/back-to-top.png"
            alt="Botão para voltar ao topo"
            title="Voltar ao topo"
          />
        </button>
      )}
    </div>
  );
};

export default Conteudo;
