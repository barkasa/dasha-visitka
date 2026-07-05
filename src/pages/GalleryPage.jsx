import { useState } from "react";
import { Link } from "react-router-dom";
import { galleryCategories, galleryWorks } from "../data/works";
import PageTitle from "../components/PageTitle";
import useInView from "../hooks/useInView";
import styles from "./GalleryPage.module.css";

export default function GalleryPage({ lang }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`${styles.page} fadeIn ${inView ? "visible" : ""}`}
    >
      <PageTitle
        title={lang === "en" ? "Gallery" : "Галерея"}
        description={
          lang === "en"
            ? "Gallery of Daria Morozova — batik, painting, decorative art."
            : "Галерея Дарьи Морозовой — батик, живопись, декоративные работы."
        }
      />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          {lang === "en" ? "Fine Art & Craft" : "Живопись и творчество"}
        </p>

        <h1 className={styles.title}>
          {lang === "en" ? "Gallery" : "Галерея"}
          <br />
          <em className={styles.titleAccent}>
            {lang === "en" ? "& Studio" : "и мастерская"}
          </em>
        </h1>

        <div className={styles.grid}>
          {Object.entries(galleryCategories).map(([slug, cat]) => (
            <CategoryCard
              key={slug}
              slug={slug}
              cat={cat}
              count={galleryWorks.filter((w) => w.category === slug).length}
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
      to={`/gallery/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={styles.card}
    >
      <div className={styles.cardInner}>
        <span className={styles.cardIcon}>{cat.icon}</span>
        <span className={styles.cardCount}>
          {count} {lang === "en" ? "works" : "работ"}
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
