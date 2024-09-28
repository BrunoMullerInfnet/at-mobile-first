import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="agenda-section">
      <h2 className="agenda-title" id="agenda">
        Agenda
      </h2>
      <div className="agenda-cards">
        <div className="agenda-card">
          <div className="agenda-sub">
            <h3 className="agenda-date">30/09/2024</h3>
            <div className="agenda-name-description">
              <span className="agenda-name">
                Ir ao jogo do flamengo com os patriotas
              </span>

              <br />
              <p className="agenda-description">
                Marco Madureira convoca todos os patriotas para participarem da
                campanha no jogo do malvadão.
              </p>
            </div>
          </div>
        </div>
        <div className="agenda-card">
          <div className="agenda-sub ">
            <h3 className="agenda-date">14/10/2024</h3>{" "}
            <div className="agenda-name-description">
              <span className="agenda-name">Discurso na Avenida Brasil</span>
              <p className="agenda-description">
                Todos os patriotas estão convidados para participarem no
                discurso do Marco Madureira contra a corrupção
              </p>
            </div>
          </div>
        </div>
        <div className="agenda-card">
          <div className="agenda-sub ">
            <h3 className="agenda-date">20/10/2024</h3>{" "}
            <div className="agenda-name-description">
              <span className="agenda-name">Pesca Corrupto</span>
              <p className="agenda-description">
                Marco Madureira convida a todos os seus eleitores para uma pesca
                comunitária na Baia de Guanabara
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
