import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

export default function Projects({ lang }) {
  const t = {
    en: { tag: "Selected Projects" },
    ru: { tag: "Избранные проекты" },
  };
  const txt = t[lang];

  const projects = [
    {
      num: "01",
      title: "Brand Identity",
      cat: "Visual Design · 2024",
      icon: "🖼",
    },
    {
      num: "02",
      title: "Illustration Series",
      cat: "Fine Art · 2024",
      icon: "🎨",
    },
    {
      num: "03",
      title: "Editorial Design",
      cat: "Typography · 2023",
      icon: "✏️",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {lang === "en" ? "Selected" : "Избранные"}
            <br />
            <em className={styles.titleAccent}>
              {lang === "en" ? "Projects" : "Проекты"}
            </em>
          </h2>
          <Link to="/projects" className={styles.viewAll}>
            {lang === "en" ? "View all →" : "Все проекты →"}
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} large={i === 0} />
          ))}
        </div>

        <div className={styles.bottomLink}>
          <Link to="/projects" className={styles.bottomLinkText}>
            {lang === "en" ? "View All Projects →" : "Все проекты →"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styles.proj} ${large ? styles.projLarge : ""}`}
    >
      <div className={styles.projPh}>
        <span className={styles.projPhIcon}>{project.icon}</span>
        <span className={styles.projPhLabel}>Work {project.num}</span>
      </div>

      <span className={styles.projNum}>{project.num}</span>

      <div className={styles.projInfo}>
        <h3 className={styles.projInfoTitle}>{project.title}</h3>
        <span className={styles.projInfoCat}>{project.cat}</span>
      </div>
    </div>
  );
}
