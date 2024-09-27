import "./Noticias.css";

const Noticias = () => {
  return (
    <div className="noticias-container">
      <h2 className="noticias-title" id="noticias">
        Notícias
      </h2>
      <div className="noticia-card">
        <div className="noticia-descricao">
          <h3>Passeata do Marco</h3>
        </div>
        <img
          src="src/assets/politico-fas.jpg"
          alt="Notícia 1"
          className="noticia-imagem"
        />
        <div className="noticia-descricao">
          <p>
            Marco Madureira discursa entre apoiadores e dispara: "Precisamos
            acordar contra a corrupção!"
          </p>
        </div>
      </div>

      <div className="noticia-card">
        <div className="noticia-descricao">
          <h3>Defesa bombástica</h3>
        </div>
        <img
          src="src/assets/politico-defesa.jpg"
          alt="Notícia 2"
          className="noticia-imagem"
        />
        <div className="noticia-descricao">
          <p>
            Marco Madureira defende criação de lei que permite o Brasil produzir
            bombas nucleares
          </p>
        </div>
      </div>

      <div className="noticia-card">
        <div className="noticia-descricao">
          <h3>Confira as artes!</h3>
        </div>
        <img
          src="src/assets/politico-arte.jpg"
          alt="Notícia 2"
          className="noticia-imagem"
        />
        <div className="noticia-descricao">
          <p>Confira já as artes dos apoiadores sobre Marco Madureira!</p>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
