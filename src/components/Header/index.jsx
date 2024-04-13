import Logo from "../../assets/Portfólio.svg";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Portfolio" />
      <div className="text__menu">
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projetos</p>
      </div>
      <button className="btn">Contato</button>
    </header>
  );
};
