import { useParams, Link } from "react-router-dom";
import { projectCategories, projectWorks } from "../data/works";
import styles from "./ProjectsCategoryPage.module.css";

export default function ProjectsCategoryPage({ lang }) {
  const { category } = useParams();
  const data = projectCategories[category];
  const works = projectWorks.filter((w) => w.category === category);

  if (!data)
    return (
      <div className={styles.page}>
        <Link to="/projects" className={styles.backLink}>
          ← Back
        </Link>
      </div>
    );

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Link to="/projects" className={styles.backLink}>
          ← {lang === "en" ? "Back to Projects" : "Назад к проектам"}
        </Link>

        <h1 className={styles.title}>
          {lang === "en" ? data.titleEn : data.titleRu}
        </h1>
        <p className={styles.desc}>
          {lang === "en" ? data.descEn : data.descRu}
        </p>

        <div className={styles.grid}>
          {works.map((work) => (
            <WorkCard key={work.id} work={work} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkCard({ work, lang }) {
  return (
    <Link
      to={`/projects/${work.category}/${work.slug}`}
      className={styles.card}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.cardInner}>
        {work.image ? (
          <img src={work.image} alt={work.title} className={styles.cardImg} />
        ) : (
          <span className={styles.cardLabel}>
            {lang === "en" ? work.sub : work.subRu}
          </span>
        )}
      </div>

      <span className={styles.cardYear}>{work.year}</span>

      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>
          {lang === "en" ? work.title : work.titleRu}
        </h3>
        <span className={styles.cardSub}>
          {lang === "en" ? work.sub : work.subRu} · {work.year}
        </span>
      </div>
    </Link>
  );
}
