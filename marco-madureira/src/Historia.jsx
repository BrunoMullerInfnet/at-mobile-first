import styles from "./Historia.module.css";

const Historia = () => {
  return (
    <div className={styles.historiaContainer}>
      <div className={styles.historiaCard}>
        <img
          src="src/assets/politico-historia.jpg"
          alt="Imagem do Candidato"
          className={styles.historiaImagem}
          id="historia"
        />
        <div className={styles.historiaTexto}>
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
