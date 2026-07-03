import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectCategories, projectWorks } from "../data/works";
import Masonry from "react-masonry-css";
import PageTitle from "../components/PageTitle";
import styles from "./ProjectDetailPage.module.css";

export default function ProjectDetailPage({ lang }) {
  const { category, slug } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const catData = projectCategories[category];
  const work = projectWorks.find(
    (w) => w.slug === slug && w.category === category,
  );

  if (!work || !catData)
    return (
      <div className={styles.page}>
        <Link to="/projects" className={styles.backLink}>
          ← Back
        </Link>
      </div>
    );

  const pages = work.pages || [];

  function openLightbox(index) {
    setLightboxIndex(index);
    setLightbox(pages[index]);
  }

  function navLightbox(dir) {
    const newIndex = lightboxIndex + dir;
    if (newIndex < 0 || newIndex >= pages.length) return;
    setLightboxIndex(newIndex);
    setLightbox(pages[newIndex]);
  }

  return (
    <div className={styles.page}>
      <PageTitle title={lang === "en" ? "Projects" : "Проекты"} />
      <div className={styles.inner}>
        <Link to={`/projects/${category}`} className={styles.backLink}>
          ←{" "}
          {lang === "en"
            ? `Back to ${catData.titleEn}`
            : `Назад к ${catData.titleRu}`}
        </Link>

        <div className={styles.header}>
          <p className={styles.tag}>
            <span className={styles.tagLine} />
            {lang === "en" ? catData.titleEn : catData.titleRu}
          </p>

          <h1 className={styles.title}>
            {lang === "en" ? work.title : work.titleRu}
          </h1>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                {lang === "en" ? "Year" : "Год"}
              </span>
              <span className={styles.metaVal}>{work.year}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                {lang === "en" ? "Type" : "Тип"}
              </span>
              <span className={styles.metaVal}>
                {lang === "en" ? work.sub : work.subRu}
              </span>
            </div>
            {pages.length > 0 && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>
                  {lang === "en" ? "Pages" : "Страниц"}
                </span>
                <span className={styles.metaVal}>{pages.length}</span>
              </div>
            )}
          </div>

          {(work.desc || work.descRu) && (
            <p className={styles.desc}>
              {lang === "en" ? work.desc : work.descRu}
            </p>
          )}
        </div>

        {pages.length > 0 ? (
          <Masonry
            breakpointCols={{
              default: 3,
              1024: 2,
              640: 2,
            }}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
          >
            {pages.map((page, i) => (
              <div
                key={page.id}
                className={styles.card}
                onClick={() => openLightbox(i)}
              >
                <div className={styles.cardInner}>
                  {page.image ? (
                    <img
                      src={page.image}
                      alt={page.caption || `Page ${i + 1}`}
                      className={styles.cardImg}
                    />
                  ) : (
                    <div className={styles.cardPlaceholder}>
                      <span className={styles.cardNum}>{i + 1}</span>
                      <span className={styles.cardCaption}>
                        {page.caption ||
                          (lang === "en"
                            ? `Page ${i + 1}`
                            : `Страница ${i + 1}`)}
                      </span>
                    </div>
                  )}
                </div>
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCaptionHover}>
                    {page.caption ||
                      (lang === "en" ? `Page ${i + 1}` : `Страница ${i + 1}`)}
                  </span>
                </div>
              </div>
            ))}
          </Masonry>
        ) : (
          <div className={styles.emptyState}>
            {lang === "en"
              ? "Pages coming soon..."
              : "Страницы скоро появятся..."}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightboxBg} onClick={() => setLightbox(null)}>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              navLightbox(-1);
            }}
            disabled={lightboxIndex === 0}
          >
            ←
          </button>

          {lightbox.image && (
            <img
              src={lightbox.image}
              alt={lightbox.caption}
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              navLightbox(1);
            }}
            disabled={lightboxIndex === pages.length - 1}
          >
            →
          </button>

          <button
            className={styles.lightboxClose}
            onClick={() => setLightbox(null)}
          >
            {lang === "en" ? "Close ✕" : "Закрыть ✕"}
          </button>

          {lightbox.caption && (
            <div className={styles.lightboxCaption}>{lightbox.caption}</div>
          )}
        </div>
      )}
    </div>
  );
}
