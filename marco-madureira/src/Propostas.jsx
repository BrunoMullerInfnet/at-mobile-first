import styles from "./Propostas.module.css"; // Importando o CSS Module

const Propostas = () => {
  return (
    <div className={styles.propostasSection}>
      <h2 className={styles.propostasTitle} id="propostas">
        Propostas de Governo
      </h2>
      <div className={styles.propostasCards}>
        <div className={styles.propostaCard}>
          <div className={styles.propostaSub}>
            <h3 className={styles.propostaTitle}>Armamento da população</h3>
            <img
              src="src/assets/pistola.png"
              alt="Imagem de uma pistola"
              title="Pistola"
            />
          </div>
          <br />
          <p className={`${styles.propostaDescription} ${styles.corrigir}`}>
            Toda a população carioca apta poderá adiquirir sua própia arma para
            defesa pessoal. Avante patriotas!
          </p>
        </div>
        <div className={styles.propostaCard}>
          <div className={styles.propostaSub}>
            <h3 className={styles.propostaTitle}>Educação sem limites</h3>
            <img
              src="src/assets/livro.png"
              alt="Imagem de um livro"
              title="Livro"
              className={styles.livro}
            />
          </div>
          <p className={`${styles.propostaDescription} ${styles.corrigir}`}>
            777% de toda a verba da prefeitura será direcionada par a educação,
            para finalmente acabarmos com a burrice.
          </p>
        </div>
        <div className={styles.propostaCard}>
          <div className={styles.propostaSub}>
            <h3 className={styles.propostaTitle}>Privatizar tudo possível</h3>
            <img
              src="src/assets/empresa.png"
              alt="Imagem de um prédio"
              title="Empresa"
              className={styles.empresa}
            />
          </div>
          <p className={`${styles.propostaDescription} ${styles.corrigir}`}>
            Tudo que for público, sem exceção, será privatizado. A fim de termos
            uma melhor administração de cada um dos serviços.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Propostas;
