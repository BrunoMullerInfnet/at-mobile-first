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
            <div className="proposta-sub">
              <h3 className="proposta-title">Armamento da população</h3>
              <img
                src="src/assets/pistola.png"
                alt="Imagem de uma pistola"
                title="Pistola"
              />
            </div>
            <br />
            <p className="proposta-description">
              Toda a população carioca apta poderá adiquirir sua própia arma
              para defesa pessoal.
            </p>
          </div>
          <div className="proposta-card">
            <div className="proposta-sub">
              <h3 className="proposta-title">Educação sem limites</h3>
              <img
                src="src/assets/livro.png"
                alt="Imagem de um livro"
                title="Livro"
                className="livro"
              />
            </div>
            <p className="proposta-description">
              40% de toda a verba da prefeitura será direcionada par a educação, para finalmente acabarmos com a burrice.
            </p>
          </div>
          <div className="proposta-card">
            <div className="proposta-sub">
            <h3 className="proposta-title">Privatizar tudo</h3> <img src="src/assets/empresa.png" alt="Imagem de um prédio" title="Empresa" className="empresa"/>
            </div><p className="proposta-description">Tudo que for público, sem exceção, será privatizado. A fim de termos uam melhor administração de cada um dos serviços.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteudo;
