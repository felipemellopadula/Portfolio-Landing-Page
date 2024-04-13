import { username } from "../../../data/user.js";
import BannerImg from "../../../assets/banner-img.png";

import styles from "./styles.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.userTitle}>
          <p className={styles.username}>{username}</p>
          <h1 className="title1">Bem vindo ao meu portfolio</h1>
        </div>
        <p className="text">Criativo, utópico e um desenvolvedor web</p>
        <button className="btn">Saiba mais</button>
      </div>
      <img src={BannerImg} alt="Ilustração de tela de computador" />
    </section>
  );
};
