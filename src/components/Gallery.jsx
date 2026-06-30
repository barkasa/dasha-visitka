// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Gallery({ lang }) {
//   const [offset, setOffset] = useState(0);

//   const t = {
//     en: {
//       tag: "Featured Works",
//       title: "A glimpse into the",
//       accent: "studio",
//     },
//     ru: { tag: "Главные работы", title: "Взгляд в", accent: "мастерскую" },
//   };
//   const txt = t[lang];

//   const works = [
//     { title: "Autumn Series", cat: "Illustration · 2024", icon: "🖼" },
//     { title: "Inner Light", cat: "Fine Art · 2024", icon: "🎨" },
//     { title: "Form Study", cat: "Mixed Media · 2023", icon: "✏️" },
//     { title: "Still Waters", cat: "Painting · 2023", icon: "🖼" },
//     { title: "Brand Atlas", cat: "Identity · 2022", icon: "🎨" },
//   ];

//   const itemWidth = 380;

//   function slide(dir) {
//     const max = (works.length - 3) * itemWidth;
//     setOffset((prev) => Math.max(0, Math.min(prev + dir * itemWidth, max)));
//   }

//   return (
//     <section
//       id="gallery"
//       style={{
//         background: "var(--cream)",
//         color: "var(--ink)",
//         padding: "100px 0",
//       }}
//     >
//       {/* Заголовок */}
//       <div
//         style={{
//           padding: "0 48px",
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "space-between",
//           marginBottom: "48px",
//         }}
//       >
//         <div>
//           <p
//             style={{
//               fontSize: "0.62rem",
//               letterSpacing: "0.25em",
//               textTransform: "uppercase",
//               color: "var(--stone)",
//               marginBottom: "12px",
//             }}
//           >
//             {txt.tag}
//           </p>
//           <h2
//             style={{
//               fontFamily: "var(--F)",
//               fontSize: "clamp(2rem, 4vw, 3.5rem)",
//               fontWeight: 300,
//             }}
//           >
//             {txt.title}
//             <br />
//             <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
//               {txt.accent}
//             </em>
//           </h2>
//         </div>
//         <div style={{ display: "flex", gap: "8px" }}>
//           {["←", "→"].map((arrow, i) => (
//             <button
//               key={i}
//               onClick={() => slide(i === 0 ? -1 : 1)}
//               style={{
//                 width: "44px",
//                 height: "44px",
//                 border: "1px solid rgba(0,0,0,0.2)",
//                 background: "none",
//                 color: "var(--ink)",
//                 cursor: "pointer",
//                 fontSize: "1.1rem",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: "1px",
//                 transition: "all 0.2s",
//               }}
//             >
//               {arrow}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Карусель */}
//       <div style={{ overflow: "hidden" }}>
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             padding: "0 48px",
//             transform: `translateX(-${offset}px)`,
//             transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//           }}
//         >
//           {works.map((work, i) => (
//             <GalleryItem key={i} work={work} />
//           ))}
//         </div>
//       </div>
//       <div
//         style={{ textAlign: "center", marginTop: "48px", padding: "0 48px" }}
//       >
//         <Link
//           to="/gallery"
//           style={{
//             fontSize: "0.68rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "var(--ink)",
//             textDecoration: "none",
//             borderBottom: "1px solid var(--accent)",
//             paddingBottom: "4px",
//           }}
//         >
//           {lang === "en" ? "View Full Gallery →" : "Вся галерея →"}
//         </Link>
//       </div>
//     </section>
//   );
// }

// function GalleryItem({ work }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         flex: "0 0 360px",
//         aspectRatio: "3/4",
//         background: "#E2DDD6",
//         position: "relative",
//         overflow: "hidden",
//         cursor: "pointer",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           gap: "8px",
//           transform: hovered ? "scale(1.04)" : "scale(1)",
//           transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//         }}
//       >
//         <span style={{ fontSize: "2rem", opacity: 0.2 }}>{work.icon}</span>
//         <span
//           style={{
//             fontSize: "0.6rem",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "rgba(0,0,0,0.2)",
//           }}
//         >
//           {work.title}
//         </span>
//       </div>

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(15,15,13,0.75)",
//           opacity: hovered ? 1 : 0,
//           transition: "opacity 0.3s",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: "24px",
//         }}
//       >
//         <h3
//           style={{
//             fontFamily: "var(--F)",
//             fontSize: "1.2rem",
//             color: "white",
//             fontWeight: 300,
//             marginBottom: "4px",
//           }}
//         >
//           {work.title}
//         </h3>
//         <span
//           style={{
//             fontSize: "0.62rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "var(--warm)",
//           }}
//         >
//           {work.cat}
//         </span>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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

  function slide(dir) {
    const max = (works.length - 3) * itemWidth;
    setOffset((prev) => Math.max(0, Math.min(prev + dir * itemWidth, max)));
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

  return (
    <section id="gallery" className={styles.gallery}>
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
