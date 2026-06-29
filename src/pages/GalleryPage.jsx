// import { useState } from "react";

// import { Link } from "react-router-dom";

// const categories = {
//   en: ["All", "Batik", "Painting", "Decorative"],
//   ru: ["Все", "Батик", "Живопись", "Декоративные работы"],
// };

// const works = [
//   // Батик
//   {
//     id: 1,
//     title: "Silk Batik I",
//     titleRu: "Батик на шёлке I",
//     cat: "Batik",
//     year: "2024",
//     sub: "Silk scarf",
//     subRu: "Шёлковый шарф",
//     icon: "🧣",
//   },
//   {
//     id: 2,
//     title: "Silk Batik II",
//     titleRu: "Батик на шёлке II",
//     cat: "Batik",
//     year: "2024",
//     sub: "Painting",
//     subRu: "Картина",
//     icon: "🧣",
//   },
//   {
//     id: 3,
//     title: "Silk Batik III",
//     titleRu: "Батик на шёлке III",
//     cat: "Batik",
//     year: "2023",
//     sub: "Silk scarf",
//     subRu: "Шёлковый шарф",
//     icon: "🧣",
//   },
//   // Живопись
//   {
//     id: 4,
//     title: "Acrylic Series I",
//     titleRu: "Акрил I",
//     cat: "Painting",
//     year: "2024",
//     sub: "Acrylic on canvas",
//     subRu: "Акрил на холсте",
//     icon: "🎨",
//   },
//   {
//     id: 5,
//     title: "Oil Study",
//     titleRu: "Масляный этюд",
//     cat: "Painting",
//     year: "2024",
//     sub: "Oil on canvas",
//     subRu: "Масло на холсте",
//     icon: "🎨",
//   },
//   {
//     id: 6,
//     title: "Alcohol Ink I",
//     titleRu: "Алкогольные чернила I",
//     cat: "Painting",
//     year: "2023",
//     sub: "Alcohol ink",
//     subRu: "Алкогольные чернила",
//     icon: "🎨",
//   },
//   {
//     id: 7,
//     title: "Alcohol Ink II",
//     titleRu: "Алкогольные чернила II",
//     cat: "Painting",
//     year: "2023",
//     sub: "Alcohol ink",
//     subRu: "Алкогольные чернила",
//     icon: "🎨",
//   },
//   {
//     id: 8,
//     title: "Watercolour Series",
//     titleRu: "Акварельная серия",
//     cat: "Painting",
//     year: "2022",
//     sub: "Watercolour",
//     subRu: "Акварель",
//     icon: "🎨",
//   },
//   // Декоративные
//   {
//     id: 9,
//     title: "Plaster Relief I",
//     titleRu: "Гипсовый рельеф I",
//     cat: "Decorative",
//     year: "2024",
//     sub: "Plaster",
//     subRu: "Гипс",
//     icon: "🏺",
//   },
//   {
//     id: 10,
//     title: "Plaster Relief II",
//     titleRu: "Гипсовый рельеф II",
//     cat: "Decorative",
//     year: "2023",
//     sub: "Plaster",
//     subRu: "Гипс",
//     icon: "🏺",
//   },
//   {
//     id: 11,
//     title: "Decorative Panel",
//     titleRu: "Декоративное панно",
//     cat: "Decorative",
//     year: "2022",
//     sub: "Plaster",
//     subRu: "Гипс",
//     icon: "🏺",
//   },
// ];

// export default function GalleryPage({ lang }) {
//   const [active, setActive] = useState(0);
//   const cats = categories[lang];

//   const filtered =
//     active === 0 ? works : works.filter((w) => w.cat === categories.en[active]);

//   return (
//     <div
//       style={{
//         background: "var(--ink)",
//         minHeight: "100vh",
//         padding: "120px 48px 80px",
//       }}
//     >
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         {/* Заголовок */}
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
//           {lang === "en" ? "Fine Art & Craft" : "Живопись и творчество"}
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
//           {lang === "en" ? "Gallery" : "Галерея"}
//           <br />
//           <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
//             {lang === "en" ? "& Studio" : "и мастерская"}
//           </em>
//         </h1>

//         {/* Фильтры */}
//         <div
//           style={{
//             display: "flex",
//             gap: "8px",
//             marginBottom: "64px",
//             flexWrap: "wrap",
//           }}
//         >
//           {cats.map((cat, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               style={{
//                 padding: "8px 24px",
//                 background: active === i ? "var(--white)" : "none",
//                 color: active === i ? "var(--ink)" : "rgba(255,255,255,0.4)",
//                 border:
//                   active === i
//                     ? "1px solid var(--white)"
//                     : "1px solid rgba(255,255,255,0.15)",
//                 fontSize: "0.68rem",
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 cursor: "pointer",
//                 borderRadius: "2px",
//                 transition: "all 0.2s",
//                 fontFamily: "Inter, sans-serif",
//               }}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Сетка */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "3px",
//           }}
//         >
//           {[
//             {
//               slug: "batik",
//               titleEn: "Batik",
//               titleRu: "Батик",
//               descEn: "Silk paintings & scarves",
//               descRu: "Картины и шарфы на шёлке",
//               icon: "🧣",
//               count: 5,
//             },
//             {
//               slug: "painting",
//               titleEn: "Painting",
//               titleRu: "Живопись",
//               descEn: "Acrylic, oil, ink, watercolour",
//               descRu: "Акрил, масло, чернила, акварель",
//               icon: "🎨",
//               count: 5,
//             },
//             {
//               slug: "decorative",
//               titleEn: "Decorative",
//               titleRu: "Декоративные",
//               descEn: "Plaster reliefs & panels",
//               descRu: "Гипсовые рельефы и панно",
//               icon: "🏺",
//               count: 3,
//             },
//           ].map((cat) => (
//             <CategoryCard key={cat.slug} cat={cat} lang={lang} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function GalleryCard({ work, lang }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "relative",
//         overflow: "hidden",
//         cursor: "pointer",
//         background: "#1A1814",
//         aspectRatio: "1/1",
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
//           gap: "12px",
//           transform: hovered ? "scale(1.04)" : "scale(1)",
//           transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
//         }}
//       >
//         <span style={{ fontSize: "2.5rem", opacity: 0.1 }}>{work.icon}</span>
//         <span
//           style={{
//             fontSize: "0.6rem",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "rgba(255,255,255,0.12)",
//           }}
//         >
//           {lang === "en" ? work.sub : work.subRu}
//         </span>
//       </div>

//       <span
//         style={{
//           position: "absolute",
//           top: "16px",
//           right: "16px",
//           fontSize: "0.6rem",
//           letterSpacing: "0.15em",
//           color: "rgba(255,255,255,0.2)",
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
import { Link } from "react-router-dom";

export default function GalleryPage({ lang }) {
  const categories = [
    {
      slug: "batik",
      titleEn: "Batik",
      titleRu: "Батик",
      descEn: "Silk paintings & scarves",
      descRu: "Картины и шарфы на шёлке",
      icon: "🧣",
      count: 5,
    },
    {
      slug: "painting",
      titleEn: "Painting",
      titleRu: "Живопись",
      descEn: "Acrylic, oil, ink, watercolour",
      descRu: "Акрил, масло, чернила, акварель",
      icon: "🎨",
      count: 5,
    },
    {
      slug: "decorative",
      titleEn: "Decorative",
      titleRu: "Декоративные",
      descEn: "Plaster reliefs & panels",
      descRu: "Гипсовые рельефы и панно",
      icon: "🏺",
      count: 3,
    },
  ];

  return (
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          {lang === "en" ? "Fine Art & Craft" : "Живопись и творчество"}
        </p>

        <h1
          style={{
            fontFamily: "var(--F)",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            marginBottom: "60px",
          }}
        >
          {lang === "en" ? "Gallery" : "Галерея"}
          <br />
          <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
            {lang === "en" ? "& Studio" : "и мастерская"}
          </em>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3px",
          }}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ cat, lang }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/gallery/${cat.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#1A1814",
        aspectRatio: "4/3",
        display: "block",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <span style={{ fontSize: "3rem", opacity: 0.15 }}>{cat.icon}</span>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          {cat.count} {lang === "en" ? "works" : "работ"}
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(15,15,13,0.92) 0%, transparent 50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "28px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--F)",
            fontSize: "1.8rem",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "6px",
          }}
        >
          {lang === "en" ? cat.titleEn : cat.titleRu}
        </h3>
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--warm)",
          }}
        >
          {lang === "en" ? cat.descEn : cat.descRu}
        </span>
      </div>
    </Link>
  );
}
