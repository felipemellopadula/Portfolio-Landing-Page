import { user } from "../../data/user.js";
import styles from "./styles.module.css";
import WhatsImg from "../../assets/whatsapp-icon.png";
import LinkedinImg from "../../assets/linkedin-icon.png";
import GitHuImg from "../../assets/github-icon.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h2 className="title2">Contato</h2>
        <div className={styles.social__media}>
          <img className={styles.img} src={WhatsImg} alt="Logo do Whatsapp" />
          <img className={styles.img} src={LinkedinImg} alt="Logo do Linkedin" />
          <img className={styles.img} src={GitHuImg} alt="Logo do Github" />
        </div>
      </div>
      <p className={styles.text__right}>Todos os direitos reservados - {user}</p>
    </footer>
  );
};
