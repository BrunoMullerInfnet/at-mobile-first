import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="form-header">
          <img
            src="src/assets/anti-comunismo.png"
            alt="Anti-Comunismo"
            className="anti-communism-image"
          />
          <h3 className="form-title">Receba Informações</h3>
        </div>

        <form className="newsletter-form">
          <input type="text" placeholder="Seu Nome" className="form-input" />
          <input type="email" placeholder="Seu E-mail" className="form-input" />
          <button type="submit" className="form-submit-btn">
            Inscrever-se
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
