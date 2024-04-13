import styles from "./styles.module.css";

export const TechCard = ({ skill }) => {
  return (
    <li className={styles.tech__list}>
      <img
        className={styles.tech__img}
        src={skill.img}
        alt={`imagem da linguagem ${skill.name}`}
      />
      <h3 className="title3">{skill.name}</h3>
    </li>
  );
};
