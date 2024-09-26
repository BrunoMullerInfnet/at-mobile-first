import "./Conteudo.css";

const Conteudo = () => {
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
      </div>{" "}
      <div className="propostas-section">
        <h2 className="propostas-title">Propostas de Governo</h2>
        <div className="propostas-cards">
          <div className="proposta-card">
            <div className="proposta-arma">
              <h3 className="proposta-title">Armamento da população</h3>
              <img
                src="src/assets/pistola.png"
                alt="Imagem de uma pistola"
                title="Pistola"
                className="pistol-icon"
              />
            </div>
            <br />
            <p className="proposta-description">
              Toda a população carioca poderá adiquirir sua própia arma para
              defesa pessoal.
            </p>
          </div>
          <div className="proposta-card">
            <h3 className="proposta-title">Proposta 2</h3>
            <p className="proposta-description">Descrição da proposta 2.</p>
          </div>
          <div className="proposta-card">
            <h3 className="proposta-title">Proposta 3</h3>
            <p className="proposta-description">Descrição da proposta 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteudo;
