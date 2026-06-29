import { Link } from "react-router-dom";

export default function Footer({ lang }) {
  const t = {
    en: {
      desc: "Designer, artist and visual storyteller. Creating beauty with intention.",
      menu: "Menu",
      social: "Social",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    ru: {
      desc: "Дизайнер, художник и визуальный нарратор. Создаю красоту с намерением.",
      menu: "Меню",
      social: "Соцсети",
      contact: "Контакты",
      rights: "Все права защищены.",
    },
  };
  const txt = t[lang];

  return (
    <footer
      style={{
        background: "#080806",
        padding: "56px 48px 36px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "40px",
          marginBottom: "48px",
          maxWidth: "1200px",
          margin: "0 auto 48px",
        }}
      >
        {/* Бренд */}
        <div>
          <div
            style={{
              fontFamily: "var(--F)",
              fontSize: "1.8rem",
              fontWeight: 300,
              color: "var(--white)",
              fontStyle: "italic",
              marginBottom: "12px",
            }}
          >
            Daria Morozova
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.25)",
              maxWidth: "240px",
            }}
          >
            {txt.desc}
          </p>
        </div>

        {/* Меню */}
        <div>
          <h4
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: "18px",
            }}
          >
            {txt.menu}
          </h4>
          {[
            ["/", lang === "en" ? "Home" : "Главная"],
            ["/projects", lang === "en" ? "Projects" : "Проекты"],
            ["/gallery", lang === "en" ? "Gallery" : "Галерея"],
            ["/contacts", lang === "en" ? "Contact" : "Контакты"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              style={{
                display: "block",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Соцсети */}
        <div>
          <h4
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: "18px",
            }}
          >
            {txt.social}
          </h4>
          {["Instagram", "Behance", "Pinterest", "Telegram"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                display: "block",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              {s}
            </a>
          ))}
        </div>

        {/* Контакты */}
        <div>
          <h4
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: "18px",
            }}
          >
            {txt.contact}
          </h4>
          <p
            style={{
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.35)",
              marginBottom: "10px",
            }}
          >
            hello@dariamorozova.com
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
            [City], [Country]
          </p>
        </div>
      </div>

      {/* Нижняя строка */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.15)" }}>
          © 2026 Daria Morozova. {txt.rights}
        </p>
        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.15)" }}>
          {lang === "en" ? "Design & Dev — Ivan" : "Дизайн и разработка — Иван"}
        </p>
      </div>
    </footer>
  );
}
