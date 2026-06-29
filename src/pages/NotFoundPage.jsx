import { Link } from "react-router-dom";

export default function NotFoundPage({ lang }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--ink)",
        color: "var(--white)",
        textAlign: "center",
        padding: "48px",
      }}
    >
      <p
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--stone)",
          marginBottom: "24px",
        }}
      >
        404
      </p>

      <h1
        style={{
          fontFamily: "var(--F)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
          marginBottom: "24px",
          lineHeight: 1.1,
        }}
      >
        {lang === "en" ? "Page not found" : "Страница не найдена"}
        <br />
        <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
          {lang === "en" ? "Lost in the studio?" : "Заблудились в мастерской?"}
        </em>
      </h1>

      <Link
        to="/"
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
        {lang === "en" ? "← Back to Home" : "← На главную"}
      </Link>
    </div>
  );
}
