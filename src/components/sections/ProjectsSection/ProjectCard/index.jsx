import GitHubImg from "../../../../assets/git-icon.png";

import styles from "./styles.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.project__list}>
      <div>
        <div>
          <h3 className="title3">{project.name}</h3>
          <p className="text">{project.description}</p>
        </div>
        <a className="textKnowMore" href="#">
          Saiba mais
        </a>
      </div>
      <img src={GitHubImg} alt={`ícone do Github`} />
    </li>
  );
};
