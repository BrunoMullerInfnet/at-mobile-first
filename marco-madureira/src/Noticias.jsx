import styles from "./Noticias.module.css";

const Noticias = () => {
  return (
    <div className={styles.noticiasWrapper}>
      <h2 className={styles.noticiasTitle} id="noticias">
        Notícias
      </h2>
      <div className={styles.noticiasContainer}>
        <div className={styles.noticiaCard}>
          <div className={styles.noticiaDescricao}>
            <h3>Passeata do Marco</h3>
          </div>
          <img
            src="src/assets/politico-fas.jpg"
            alt="Notícia 1"
            className={styles.noticiaImagem}
          />
          <div className={styles.noticiaDescricao}>
            <p>
              Marco Madureira discursa entre apoiadores e dispara: "Precisamos
              acordar contra a corrupção!"
            </p>
          </div>
        </div>

        <div className={styles.noticiaCard}>
          <div className={styles.noticiaDescricao}>
            <h3>Defesa bombástica</h3>
          </div>
          <img
            src="src/assets/politico-defesa.jpg"
            alt="Notícia 2"
            className={styles.noticiaImagem}
          />
          <div className={styles.noticiaDescricao}>
            <p>
              Marco Madureira defende criação de lei que permite o Brasil
              produzir bombas nucleares.
            </p>
          </div>
        </div>

        <div className={styles.noticiaCard}>
          <div className={styles.noticiaDescricao}>
            <h3>Confira as artes!</h3>
          </div>
          <img
            src="src/assets/politico-arte.jpg"
            alt="Notícia 3"
            className={styles.noticiaImagem}
          />
          <div className={styles.noticiaDescricao}>
            <p>Confira já as artes dos apoiadores sobre Marco Madureira!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
