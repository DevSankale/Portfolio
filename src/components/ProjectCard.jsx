import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img
          src={`${project.projectCover}`}
          alt={`${project.title} cover`}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
