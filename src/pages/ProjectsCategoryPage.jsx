// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { projectCategories, projectWorks } from "../data/works";

// export default function ProjectsCategoryPage({ lang }) {
//   const { category } = useParams();
//   const [lightbox, setLightbox] = useState(null);
//   const data = projectCategories[category];
//   const works = projectWorks.filter((w) => w.category === category);

//   if (!data)
//     return (
//       <div style={{ padding: "120px 48px", color: "var(--white)" }}>
//         <Link to="/projects" style={{ color: "var(--warm)" }}>
//           ← Back
//         </Link>
//       </div>
//     );

//   return (
//     <div
//       style={{
//         background: "var(--ink)",
//         minHeight: "100vh",
//         padding: "120px 48px 80px",
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <Link
//           to="/projects"
//           style={{
//             fontSize: "0.65rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "var(--stone)",
//             textDecoration: "none",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px",
//             marginBottom: "48px",
//           }}
//         >
//           ← {lang === "en" ? "Back to Projects" : "Назад к проектам"}
//         </Link>

//         <h1
//           style={{
//             fontFamily: "var(--F)",
//             fontSize: "clamp(3rem, 6vw, 5.5rem)",
//             fontWeight: 300,
//             lineHeight: 0.95,
//             marginBottom: "16px",
//           }}
//         >
//           {lang === "en" ? data.titleEn : data.titleRu}
//         </h1>
//         <p
//           style={{
//             fontSize: "0.85rem",
//             color: "rgba(255,255,255,0.4)",
//             marginBottom: "60px",
//             maxWidth: "500px",
//             lineHeight: 1.7,
//           }}
//         >
//           {lang === "en" ? data.descEn : data.descRu}
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "3px",
//           }}
//         >
//           {works.map((work) => (
//             <WorkCard
//               key={work.id}
//               work={work}
//               lang={lang}
//               onClick={() => setLightbox(work)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div
//           onClick={() => setLightbox(null)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             zIndex: 999,
//             background: "rgba(0,0,0,0.95)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "20px",
//             overflowY: "auto",
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 360px",
//               gap: "56px",
//               maxWidth: "1400px",
//               width: "100%",
//               alignItems: "start",
//             }}
//           >
//             <div
//               style={{
//                 width: "100%",
//                 background: "transparent",
//                 position: "relative",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 gap: "16px",
//                 maxHeight: "85vh",
//               }}
//             >
//               {lightbox.image ? (
//                 <img
//                   src={lightbox.image}
//                   alt={lightbox.title}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     maxHeight: "85vh",
//                     objectFit: "contain",
//                     display: "block",
//                   }}
//                 />
//               ) : (
//                 <>
//                   <span style={{ fontSize: "4rem", opacity: 0.15 }}>
//                     {data.icon}
//                   </span>
//                   <span
//                     style={{
//                       fontSize: "0.6rem",
//                       letterSpacing: "0.2em",
//                       textTransform: "uppercase",
//                       color: "rgba(255,255,255,0.2)",
//                       padding: "60px 0",
//                     }}
//                   >
//                     {lang === "en" ? "[ Image ]" : "[ Изображение ]"}
//                   </span>
//                 </>
//               )}
//             </div>

//             <div style={{ paddingTop: "12px" }}>
//               <h2
//                 style={{
//                   fontFamily: "var(--F)",
//                   fontSize: "2.2rem",
//                   fontWeight: 300,
//                   color: "var(--white)",
//                   marginBottom: "24px",
//                   lineHeight: 1.1,
//                 }}
//               >
//                 {lang === "en" ? lightbox.title : lightbox.titleRu}
//               </h2>

//               {[
//                 [lang === "en" ? "Year" : "Год", lightbox.year],
//                 [
//                   lang === "en" ? "Type" : "Тип",
//                   lang === "en" ? lightbox.sub : lightbox.subRu,
//                 ],
//                 [
//                   lang === "en" ? "Category" : "Категория",
//                   lang === "en" ? data.titleEn : data.titleRu,
//                 ],
//               ].map(([label, val]) => (
//                 <div
//                   key={label}
//                   style={{
//                     padding: "14px 0",
//                     borderBottom: "1px solid rgba(255,255,255,0.08)",
//                     display: "flex",
//                     gap: "16px",
//                   }}
//                 >
//                   <span
//                     style={{
//                       fontSize: "0.6rem",
//                       letterSpacing: "0.15em",
//                       textTransform: "uppercase",
//                       color: "var(--stone)",
//                       minWidth: "80px",
//                     }}
//                   >
//                     {label}
//                   </span>
//                   <span
//                     style={{
//                       fontSize: "0.85rem",
//                       color: "rgba(255,255,255,0.6)",
//                     }}
//                   >
//                     {val}
//                   </span>
//                 </div>
//               ))}

//               <button
//                 onClick={() => setLightbox(null)}
//                 style={{
//                   marginTop: "32px",
//                   background: "none",
//                   border: "1px solid rgba(255,255,255,0.2)",
//                   color: "rgba(255,255,255,0.5)",
//                   padding: "10px 24px",
//                   fontSize: "0.65rem",
//                   letterSpacing: "0.15em",
//                   textTransform: "uppercase",
//                   cursor: "pointer",
//                   fontFamily: "Inter, sans-serif",
//                   borderRadius: "2px",
//                 }}
//               >
//                 {lang === "en" ? "Close ✕" : "Закрыть ✕"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function WorkCard({ work, lang, onClick }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={onClick}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         cursor: "pointer",
//         background: "#1A1814",
//         aspectRatio: "4/3",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//           gap: "12px",
//           transform: hovered ? "scale(1.04)" : "scale(1)",
//           transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//         }}
//       >
//         {work.image ? (
//           <img
//             src={work.image}
//             alt={work.title}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               position: "absolute",
//               inset: 0,
//             }}
//           />
//         ) : (
//           <span
//             style={{
//               fontSize: "0.6rem",
//               letterSpacing: "0.2em",
//               textTransform: "uppercase",
//               color: "rgba(255,255,255,0.12)",
//             }}
//           >
//             {lang === "en" ? work.sub : work.subRu}
//           </span>
//         )}
//       </div>

//       <span
//         style={{
//           position: "absolute",
//           top: "16px",
//           right: "16px",
//           fontSize: "0.6rem",
//           color: "rgba(255,255,255,0.2)",
//           zIndex: 2,
//         }}
//       >
//         {work.year}
//       </span>

//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(15,15,13,0.92) 0%, transparent 60%)",
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
//             fontSize: "1.3rem",
//             fontWeight: 300,
//             color: "var(--white)",
//             marginBottom: "6px",
//           }}
//         >
//           {lang === "en" ? work.title : work.titleRu}
//         </h3>
//         <span
//           style={{
//             fontSize: "0.62rem",
//             letterSpacing: "0.15em",
//             textTransform: "uppercase",
//             color: "var(--warm)",
//           }}
//         >
//           {lang === "en" ? work.sub : work.subRu} · {work.year}
//         </span>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectCategories, projectWorks } from "../data/works";
import styles from "./ProjectsCategoryPage.module.css";

export default function ProjectsCategoryPage({ lang }) {
  const { category } = useParams();
  const [lightbox, setLightbox] = useState(null);
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
            <WorkCard
              key={work.id}
              work={work}
              lang={lang}
              onClick={() => setLightbox(work)}
            />
          ))}
        </div>
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
                  lang === "en" ? "Type" : "Тип",
                  lang === "en" ? lightbox.sub : lightbox.subRu,
                ],
                [
                  lang === "en" ? "Category" : "Категория",
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
