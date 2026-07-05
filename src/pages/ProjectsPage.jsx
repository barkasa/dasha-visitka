import { useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projectWorks } from "../data/works";
import PageTitle from "../components/PageTitle";
import useInView from "../hooks/useInView";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage({ lang }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.page} fadeIn ${inView ? "visible" : ""}`}
    >
      <PageTitle title={lang === "en" ? "Projects" : "Проекты"} />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          {lang === "en" ? "Selected Projects" : "Избранные проекты"}
        </p>

        <h1 className={styles.title}>
          {lang === "en" ? "Projects" : "Проекты"}
          <br />
          <em className={styles.titleAccent}>
            {lang === "en" ? "& Work" : "и работы"}
          </em>
        </h1>

        <div className={styles.grid}>
          {Object.entries(projectCategories).map(([slug, cat]) => (
            <CategoryCard
              key={slug}
              slug={slug}
              cat={cat}
              count={projectWorks.filter((w) => w.category === slug).length}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ slug, cat, count, lang }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.card}
    >
      <div className={styles.cardInner}>
        <span className={styles.cardIcon}>{cat.icon}</span>
        <span className={styles.cardCount}>
          {count} {lang === "en" ? "projects" : "проектов"}
        </span>
      </div>

      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>
          {lang === "en" ? cat.titleEn : cat.titleRu}
        </h3>
        <span className={styles.cardDesc}>
          {lang === "en" ? cat.descEn : cat.descRu}
        </span>
      </div>
    </Link>
  );
}
