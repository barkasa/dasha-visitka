import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryCategories, galleryWorks } from "../data/works";
import Masonry from "react-masonry-css";
import PageTitle from "../components/PageTitle";
import styles from "./GalleryCategoryPage.module.css";

export default function GalleryCategoryPage({ lang }) {
  const { category } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const data = galleryCategories[category];
  const works = galleryWorks
    .filter((w) => w.category === category)
    .sort((a, b) => b.year - a.year);
  // новые впереди

  if (!data)
    return (
      <div className={styles.page}>
        <Link to="/gallery" className={styles.backLink}>
          ← Back
        </Link>
      </div>
    );

  return (
    <div className={styles.page}>
      <PageTitle title={lang === "en" ? "Gallery" : "Галерея"} />
      <div className={styles.inner}>
        <Link to="/gallery" className={styles.backLink}>
          ← {lang === "en" ? "Back to Gallery" : "Назад в галерею"}
        </Link>

        <h1 className={styles.title}>
          {lang === "en" ? data.titleEn : data.titleRu}
        </h1>
        <p className={styles.desc}>
          {lang === "en" ? data.descEn : data.descRu}
        </p>

        {/* <div className={styles.grid}>
          {works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              lang={lang}
              onClick={() => setLightbox(work)}
            />
          ))}
        </div> */}
        <Masonry
          breakpointCols={{
            default: 3,
            1024: 2,
            640: 2,
          }}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
          {works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              lang={lang}
              onClick={() => setLightbox(work)}
            />
          ))}
        </Masonry>
      </div>

      {lightbox && (
        <div className={styles.lightboxBg} onClick={() => setLightbox(null)}>
          <div
            className={styles.lightboxInner}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxImg}>
              {lightbox.image ? (
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className={styles.lightboxImgEl}
                />
              ) : (
                <span className={styles.lightboxPlaceholder}>{data.icon}</span>
              )}
            </div>

            <div className={styles.lightboxInfo}>
              <h2 className={styles.lightboxTitle}>
                {lang === "en" ? lightbox.title : lightbox.titleRu}
              </h2>

              {[
                [lang === "en" ? "Year" : "Год", lightbox.year],
                [
                  lang === "en" ? "Medium" : "Техника",
                  lang === "en" ? lightbox.sub : lightbox.subRu,
                ],
                [
                  lang === "en" ? "Series" : "Серия",
                  lang === "en" ? data.titleEn : data.titleRu,
                ],
              ].map(([label, val]) => (
                <div key={label} className={styles.lightboxRow}>
                  <span className={styles.lightboxLabel}>{label}</span>
                  <span className={styles.lightboxVal}>{val}</span>
                </div>
              ))}

              <button
                onClick={() => setLightbox(null)}
                className={styles.lightboxClose}
              >
                {lang === "en" ? "Close ✕" : "Закрыть ✕"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function WorkCard({ work, lang, onClick }) {
  return (
    <div onClick={onClick} className={styles.card}>
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
    </div>
  );
}
