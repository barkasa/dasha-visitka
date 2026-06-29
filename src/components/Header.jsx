import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ lang, setLang }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: "60px",
        background: "rgba(15,15,13,0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "var(--F)",
          fontSize: "1.1rem",
          color: "var(--white)",
          textDecoration: "none",
          letterSpacing: "0.06em",
        }}
      >
        Daria Morozova
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <Link to="/projects" style={navLink}>
          {lang === "en" ? "Projects" : "Проекты"}
        </Link>
        <Link to="/gallery" style={navLink}>
          {lang === "en" ? "Gallery" : "Галерея"}
        </Link>
        <Link to="/contacts" style={navLink}>
          {lang === "en" ? "Contact" : "Контакты"}
        </Link>
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          style={langBtn}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>
      </nav>
    </header>
  );
}

const navLink = {
  fontSize: "0.68rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
};

const langBtn = {
  fontSize: "0.68rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  background: "none",
  border: "1px solid rgba(255,255,255,0.35)",
  color: "rgba(255,255,255,0.6)",
  padding: "4px 10px",
  cursor: "pointer",
  borderRadius: "2px",
  fontFamily: "var(--FB)",
};
