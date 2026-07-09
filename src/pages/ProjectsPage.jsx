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
      <PageTitle
        title={lang === "en" ? "Projects" : "Проекты"}
        description={
          lang === "en"
            ? "Design projects by Daria Morozova — illustration, graphic design, brand identity."
            : "Проекты Дарьи Морозовой — иллюстрация, графический дизайн, айдентика."
        }
      />
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

// function CategoryCard({ slug, cat, count, lang }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link
//       to={`/projects/${slug}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className={styles.card}
//     >
//       <div className={styles.cardInner}>
//         <span className={styles.cardIcon}>{cat.icon}</span>
//         <span className={styles.cardCount}>
//           {count} {lang === "en" ? "projects" : "проектов"}
//         </span>
//       </div>

//       <div className={styles.cardOverlay}>
//         <h3 className={styles.cardTitle}>
//           {lang === "en" ? cat.titleEn : cat.titleRu}
//         </h3>
//         <span className={styles.cardDesc}>
//           {lang === "en" ? cat.descEn : cat.descRu}
//         </span>
//       </div>
//     </Link>
function CategoryCard({ slug, cat, count, lang }) {
  const [hovered, setHovered] = useState(false);

  const previewImages = projectWorks
    .filter((w) => w.category === slug && w.image)
    .slice(0, 4);

  const firstImage = previewImages[0];

  return (
    <Link
      to={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.card}
    >
      {/* Коллаж или одна картинка */}
      {previewImages.length >= 2 ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(previewImages.length, 4)}, 1fr)`,
            gridTemplateRows: "1fr",
            gap: "2px",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {previewImages.map((w, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <img
                src={w.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.75)",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : firstImage ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <img
            src={firstImage.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "brightness(0.75)",
            }}
            loading="lazy"
          />
        </div>
      ) : (
        <div className={styles.cardInner}>
          <span className={styles.cardIcon}>{cat.icon}</span>
        </div>
      )}

      {/* Виньетка + полоска снизу */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
    linear-gradient(to top, rgba(15,15,13,1) 0%, rgba(15,15,13,1) 25%, transparent 50%),
    linear-gradient(to bottom, rgba(15,15,13,0.7) 0%, transparent 40%),
    linear-gradient(to right, rgba(15,15,13,0.7) 0%, transparent 40%),
    linear-gradient(to left, rgba(15,15,13,0.7) 0%, transparent 40%)
        `,
          zIndex: 1,
        }}
      />

      {/* Текст */}
      <div className={styles.cardOverlay} style={{ zIndex: 2 }}>
        <h3 className={styles.cardTitle}>
          {lang === "en" ? cat.titleEn : cat.titleRu}
        </h3>
        <span className={styles.cardDesc}>
          {count} {lang === "en" ? "projects" : "проектов"}
        </span>
      </div>
    </Link>
  );
}
