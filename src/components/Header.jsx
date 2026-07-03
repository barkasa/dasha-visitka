import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/about", en: "About", ru: "О себе" },
    { to: "/projects", en: "Projects", ru: "Проекты" },
    { to: "/gallery", en: "Gallery", ru: "Галерея" },
    { to: "/contacts", en: "Contact", ru: "Контакты" },
  ];

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Daria Morozova
        </Link>

        <nav className={styles.desktopNav}>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.navLink} ${location.pathname.startsWith(l.to) ? styles.navLinkActive : ""}`}
            >
              {lang === "en" ? l.en : l.ru}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            className={styles.langBtn}
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.burgerBtn}
        >
          <span
            className={styles.burgerLine}
            style={{
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            className={styles.burgerLine}
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className={styles.burgerLine}
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </header>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            {lang === "en" ? l.en : l.ru}
          </Link>
        ))}
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          className={styles.langBtn}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>
      </div>
    </>
  );
}
