import { projects } from "../../../data/projects.js";

import { ProjectCard } from "./ProjectCard/index.jsx";

import styles from "./styles.module.css";

export const ProjectsSection = () => {
  return (
    <section className={styles.container}>
      <h2 className="title2">Projetos</h2>
      <ul className={styles.tech__container}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </ul>
    </section>
  );
};
