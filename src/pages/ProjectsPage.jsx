// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { projectCategories, projectWorks } from "../data/works";

// export default function ProjectsPage({ lang }) {
//   return (
//     <div
//       style={{
//         background: "var(--ink)",
//         minHeight: "100vh",
//         padding: "120px 48px 80px",
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <p
//           style={{
//             fontSize: "0.62rem",
//             letterSpacing: "0.25em",
//             textTransform: "uppercase",
//             color: "var(--stone)",
//             marginBottom: "24px",
//             display: "flex",
//             alignItems: "center",
//             gap: "16px",
//           }}
//         >
//           <span
//             style={{
//               width: "32px",
//               height: "1px",
//               background: "var(--accent)",
//               display: "inline-block",
//             }}
//           />
//           {lang === "en" ? "Selected Projects" : "Избранные проекты"}
//         </p>

//         <h1
//           style={{
//             fontFamily: "var(--F)",
//             fontSize: "clamp(3rem, 6vw, 5.5rem)",
//             fontWeight: 300,
//             lineHeight: 0.95,
//             marginBottom: "60px",
//           }}
//         >
//           {lang === "en" ? "Projects" : "Проекты"}
//           <br />
//           <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
//             {lang === "en" ? "& Work" : "и работы"}
//           </em>
//         </h1>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(2, 1fr)",
//             gap: "3px",
//           }}
//         >
//           {Object.entries(projectCategories).map(([slug, cat]) => (
//             <CategoryCard
//               key={slug}
//               slug={slug}
//               cat={cat}
//               count={projectWorks.filter((w) => w.category === slug).length}
//               lang={lang}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function CategoryCard({ slug, cat, count, lang }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link
//       to={`/projects/${slug}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         background: "#1A1814",
//         aspectRatio: "16/9",
//         display: "block",
//         textDecoration: "none",
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
//           gap: "16px",
//           transform: hovered ? "scale(1.04)" : "scale(1)",
//           transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//         }}
//       >
//         <span style={{ fontSize: "3rem", opacity: 0.15 }}>{cat.icon}</span>
//         <span
//           style={{
//             fontSize: "0.6rem",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "rgba(255,255,255,0.15)",
//           }}
//         >
//           {count} {lang === "en" ? "projects" : "проектов"}
//         </span>
//       </div>

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(15,15,13,0.92) 0%, transparent 50%)",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: "28px",
//         }}
//       >
//         <h3
//           style={{
//             fontFamily: "var(--F)",
//             fontSize: "1.8rem",
//             fontWeight: 300,
//             color: "var(--white)",
//             marginBottom: "6px",
//           }}
//         >
//           {lang === "en" ? cat.titleEn : cat.titleRu}
//         </h3>
//         <span
//           style={{
//             fontSize: "0.62rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "var(--warm)",
//           }}
//         >
//           {lang === "en" ? cat.descEn : cat.descRu}
//         </span>
//       </div>
//     </Link>
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projectWorks } from "../data/works";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage({ lang }) {
  return (
    <div className={styles.page}>
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
