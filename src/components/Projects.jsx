import { useState } from "react";
import { Link } from "react-router-dom";
export default function Projects({ lang }) {
  const t = {
    en: { tag: "Selected Projects", viewAll: "View all →" },
    ru: { tag: "Избранные проекты", viewAll: "Все проекты →" },
  };
  const txt = t[lang];

  const projects = [
    {
      num: "01",
      title: "Brand Identity",
      cat: "Visual Design · 2024",
      icon: "🖼",
    },
    {
      num: "02",
      title: "Illustration Series",
      cat: "Fine Art · 2024",
      icon: "🎨",
    },
    {
      num: "03",
      title: "Editorial Design",
      cat: "Typography · 2023",
      icon: "✏️",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "var(--ink)",
        padding: "80px 48px 100px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Заголовок */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--F)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            {lang === "en" ? "Selected" : "Избранные"}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
              {lang === "en" ? "Projects" : "Проекты"}
            </em>
          </h2>
          <a
            href="#"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--stone)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(122,117,112,0.4)",
              paddingBottom: "3px",
            }}
          >
            {txt.viewAll}
          </a>
        </div>

        {/* Сетка */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "3px",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} large={i === 0} />
          ))}
        </div>
        {/* Кнопка */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link
            to="/projects"
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--white)",
              textDecoration: "none",
              borderBottom: "1px solid var(--warm)",
              paddingBottom: "4px",
            }}
          >
            {lang === "en" ? "View All Projects →" : "Все проекты →"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        background: "#1A1814",
        gridRow: large ? "span 2" : "auto",
        minHeight: large ? "600px" : "300px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "8px",
          transform: hovered ? "scale(1.03)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <span style={{ fontSize: "2.5rem", opacity: 0.12 }}>
          {project.icon}
        </span>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          Work {project.num}
        </span>
      </div>

      <span
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "0.62rem",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        {project.num}
      </span>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px",
          background:
            "linear-gradient(to top, rgba(15,15,13,0.9) 0%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.3s",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--F)",
            fontSize: "1.4rem",
            fontWeight: 300,
            color: "var(--white)",
            marginBottom: "4px",
          }}
        >
          {project.title}
        </h3>
        <span
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--warm)",
          }}
        >
          {project.cat}
        </span>
      </div>
    </div>
  );
}
