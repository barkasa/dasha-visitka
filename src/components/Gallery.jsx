import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import styles from "./Gallery.module.css";

export default function Gallery({ lang }) {
  const [offset, setOffset] = useState(0);
  const touchStartX = useRef(null);

  const t = {
    en: {
      tag: "Featured Works",
      title: "A glimpse into the",
      accent: "studio",
    },
    ru: { tag: "Главные работы", title: "Взгляд в", accent: "мастерскую" },
  };
  const txt = t[lang];

  const works = [
    { title: "Autumn Series", cat: "Illustration · 2024", icon: "🖼" },
    { title: "Inner Light", cat: "Fine Art · 2024", icon: "🎨" },
    { title: "Form Study", cat: "Mixed Media · 2023", icon: "✏️" },
    { title: "Still Waters", cat: "Painting · 2023", icon: "🖼" },
    { title: "Brand Atlas", cat: "Identity · 2022", icon: "🎨" },
  ];

  const itemWidth = 380;
  const [currentIndex, setCurrentIndex] = useState(0);
  function slide(dir) {
    const max = (works.length - 3) * itemWidth;
    const newOffset = Math.max(0, Math.min(offset + dir * itemWidth, max));
    setOffset(newOffset);
    setCurrentIndex((prev) =>
      Math.max(0, Math.min(prev + dir, works.length - 1)),
    );
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      slide(diff > 0 ? 1 : -1);
    }
    touchStartX.current = null;
  }
  const [ref, inView] = useInView();
  return (
    <section
      id="gallery"
      ref={ref}
      className={`${styles.gallery} fadeIn ${inView ? "visible" : ""}`}
    >
      <div className={styles.head}>
        <div className={styles.titleWrap}>
          <p className={styles.tag}>{txt.tag}</p>
          <h2 className={styles.title}>
            {txt.title}
            <br />
            <em className={styles.titleAccent}>{txt.accent}</em>
          </h2>
        </div>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={() => slide(-1)}>
            ←
          </button>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--stone)",
              minWidth: "40px",
              textAlign: "center",
            }}
          >
            {currentIndex + 1} / {works.length}
          </span>
          <button className={styles.btn} onClick={() => slide(1)}>
            →
          </button>
        </div>
      </div>

      <div className={styles.trackWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {works.map((work, i) => (
            <GalleryItem key={i} work={work} />
          ))}
        </div>
      </div>

      <div className={styles.bottomLink}>
        <Link to="/gallery" className={styles.bottomLinkText}>
          {lang === "en" ? "View Full Gallery →" : "Вся галерея →"}
        </Link>
      </div>
    </section>
  );
}

function GalleryItem({ work }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemPh}>
        <span className={styles.itemPhIcon}>{work.icon}</span>
        <span className={styles.itemPhLabel}>{work.title}</span>
      </div>
      <div className={styles.itemOverlay}>
        <h3 className={styles.itemTitle}>{work.title}</h3>
        <span className={styles.itemCat}>{work.cat}</span>
      </div>
    </div>
  );
}
