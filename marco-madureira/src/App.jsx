import styles from "./App.module.css";
import Header from "./Header";
import Conteudo from "./Conteudo";

function App() {
  return (
    <div className={styles.appContainer}>
      {" "}
      <Header />
      <Conteudo />
    </div>
  );
}

export default App;
