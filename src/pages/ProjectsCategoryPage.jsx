import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const allProjects = {
  illustration: {
    titleEn: "Illustration",
    titleRu: "Иллюстрация",
    descEn: "Book illustrations and series.",
    descRu: "Иллюстрации для книг и серии работ.",
    works: [
      {
        id: 1,
        title: "Children's Book I",
        titleRu: "Детская книга I",
        year: "2024",
        sub: "Book illustration",
        subRu: "Книжная иллюстрация",
        icon: "📖",
      },
      {
        id: 2,
        title: "Children's Book II",
        titleRu: "Детская книга II",
        year: "2024",
        sub: "Book illustration",
        subRu: "Книжная иллюстрация",
        icon: "📖",
      },
      {
        id: 3,
        title: "Illustration Series I",
        titleRu: "Серия иллюстраций I",
        year: "2023",
        sub: "Editorial illustration",
        subRu: "Редакционная иллюстрация",
        icon: "🎨",
      },
      {
        id: 4,
        title: "Illustration Series II",
        titleRu: "Серия иллюстраций II",
        year: "2022",
        sub: "Editorial illustration",
        subRu: "Редакционная иллюстрация",
        icon: "🎨",
      },
    ],
  },
  graphic: {
    titleEn: "Graphic Design",
    titleRu: "Графический дизайн",
    descEn:
      "Catalogues, booklets, posters, packaging, logos and technical drawings.",
    descRu:
      "Каталоги, буклеты, плакаты, упаковка, логотипы и технические чертежи.",
    works: [
      {
        id: 1,
        title: "Brand Identity",
        titleRu: "Айдентика бренда",
        year: "2024",
        sub: "Logo & Identity",
        subRu: "Логотип и айдентика",
        icon: "✦",
      },
      {
        id: 2,
        title: "Product Catalogue",
        titleRu: "Каталог продукции",
        year: "2024",
        sub: "Catalogue",
        subRu: "Каталог",
        icon: "📋",
      },
      {
        id: 3,
        title: "Poster Series",
        titleRu: "Серия плакатов",
        year: "2023",
        sub: "Poster design",
        subRu: "Дизайн плакатов",
        icon: "🖼",
      },
      {
        id: 4,
        title: "Packaging Design",
        titleRu: "Дизайн упаковки",
        year: "2023",
        sub: "Packaging",
        subRu: "Упаковка",
        icon: "📦",
      },
      {
        id: 5,
        title: "Booklet & Brochure",
        titleRu: "Буклет и брошюра",
        year: "2023",
        sub: "Print design",
        subRu: "Печатный дизайн",
        icon: "📄",
      },
      {
        id: 6,
        title: "Business Cards",
        titleRu: "Визитные карточки",
        year: "2022",
        sub: "Print design",
        subRu: "Печатный дизайн",
        icon: "🗂",
      },
      {
        id: 7,
        title: "Technical Drawings",
        titleRu: "Технические чертежи",
        year: "2022",
        sub: "Technical",
        subRu: "Технический",
        icon: "📐",
      },
    ],
  },
};

export default function ProjectsCategoryPage({ lang }) {
  const { category } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const data = allProjects[category];

  if (!data)
    return (
      <div style={{ padding: "120px 48px", color: "var(--white)" }}>
        <Link to="/projects" style={{ color: "var(--warm)" }}>
          ← Back
        </Link>
      </div>
    );

  return (
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link
          to="/projects"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--stone)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "48px",
          }}
        >
          ← {lang === "en" ? "Back to Projects" : "Назад к проектам"}
        </Link>

        <h1
          style={{
            fontFamily: "var(--F)",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            marginBottom: "16px",
          }}
        >
          {lang === "en" ? data.titleEn : data.titleRu}
        </h1>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "60px",
            maxWidth: "500px",
            lineHeight: 1.7,
          }}
        >
          {lang === "en" ? data.descEn : data.descRu}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3px",
          }}
        >
          {data.works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              lang={lang}
              onClick={() => setLightbox(work)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "48px",
              maxWidth: "1000px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              style={{
                aspectRatio: "4/3",
                background: "#2A2520",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "4rem", opacity: 0.15 }}>
                {lightbox.icon}
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                {lang === "en" ? "[ Image ]" : "[ Изображение ]"}
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--F)",
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "24px",
                  lineHeight: 1.1,
                }}
              >
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
                <div
                  key={label}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      minWidth: "80px",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}

              <button
                onClick={() => setLightbox(null)}
                style={{
                  marginTop: "32px",
                  background: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.5)",
                  padding: "10px 24px",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  borderRadius: "2px",
                }}
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#1A1814",
        aspectRatio: "4/3",
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
          gap: "12px",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <span style={{ fontSize: "2.5rem", opacity: 0.1 }}>{work.icon}</span>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.12)",
          }}
        >
          {lang === "en" ? work.sub : work.subRu}
        </span>
      </div>

      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          fontSize: "0.6rem",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        {work.year}
      </span>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(15,15,13,0.92) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--F)",
            fontSize: "1.3rem",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "6px",
          }}
        >
          {lang === "en" ? work.title : work.titleRu}
        </h3>
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--warm)",
          }}
        >
          {lang === "en" ? work.sub : work.subRu} · {work.year}
        </span>
      </div>
    </div>
  );
}
