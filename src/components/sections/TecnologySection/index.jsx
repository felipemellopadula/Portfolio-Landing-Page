import { technologies } from "../../../data/technologies.js";
import { TechCard } from "./TechCard";

import styles from "./styles.module.css"

export const TecnologySection = () => {
  return (
    <section className={styles.container}>
      <h2 className="title2">Tecnologias</h2>
      <ul className={styles.tech__container}>
        {technologies.map((skill, i) => (
          <TechCard key={i} skill={skill} />
        ))}
      </ul>
    </section>
  );
};
