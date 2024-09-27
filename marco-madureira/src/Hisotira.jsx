import "./Historia.css";

const Historia = () => {
  return (
    <div className="historia-container">
      <div className="historia-card">
        <img
          src="src/assets/politico-historia.jpg"
          alt="Imagem do Candidato"
          className="historia-imagem"
          id="historia"
        />
        <div className="historia-texto">
          <h2>Minha História</h2>
          <p>
            A trajetória de vida de Marco Madureira reflete seu compromisso com
            a justiça social, educação e crescimento econômico. Com uma longa
            carreira dedicada ao serviço público, ele busca transformar vidas e
            fortalecer a nação com políticas inclusivas e eficientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
