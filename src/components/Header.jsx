// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header({ lang, setLang }) {
//   return (
//     <header
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 200,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "0 48px",
//         height: "60px",
//         background: "rgba(15,15,13,0.85)",
//         backdropFilter: "blur(12px)",
//       }}
//     >
//       <Link
//         to="/"
//         style={{
//           fontFamily: "var(--F)",
//           fontSize: "1.1rem",
//           color: "var(--white)",
//           textDecoration: "none",
//           letterSpacing: "0.06em",
//         }}
//       >
//         Daria Morozova
//       </Link>
//       <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
//         <Link to="/projects" style={navLink}>
//           {lang === "en" ? "Projects" : "Проекты"}
//         </Link>
//         <Link to="/gallery" style={navLink}>
//           {lang === "en" ? "Gallery" : "Галерея"}
//         </Link>
//         <Link to="/contacts" style={navLink}>
//           {lang === "en" ? "Contact" : "Контакты"}
//         </Link>
//         <button
//           onClick={() => setLang(lang === "en" ? "ru" : "en")}
//           style={langBtn}
//         >
//           {lang === "en" ? "RU" : "EN"}
//         </button>
//       </nav>
//     </header>
//   );
// }

// const navLink = {
//   fontSize: "0.68rem",
//   letterSpacing: "0.15em",
//   textTransform: "uppercase",
//   color: "rgba(255,255,255,0.6)",
//   textDecoration: "none",
// };

// const langBtn = {
//   fontSize: "0.68rem",
//   letterSpacing: "0.12em",
//   textTransform: "uppercase",
//   background: "none",
//   border: "1px solid rgba(255,255,255,0.35)",
//   color: "rgba(255,255,255,0.6)",
//   padding: "4px 10px",
//   cursor: "pointer",
//   borderRadius: "2px",
//   fontFamily: "var(--FB)",
// };
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/projects", en: "Projects", ru: "Проекты" },
    { to: "/gallery", en: "Gallery", ru: "Галерея" },
    { to: "/contacts", en: "Contact", ru: "Контакты" },
  ];

  return (
    <>
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
          background: "rgba(15,15,13,0.92)",
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

        {/* Десктоп nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            // "@media(max-width:768px)": { display: "none" },
          }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color:
                  location.pathname === l.to
                    ? "var(--white)"
                    : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {lang === "en" ? l.en : l.ru}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ru" : "en")}
            style={langBtn}
          >
            {lang === "en" ? "RU" : "EN"}
          </button>
        </nav>

        {/* Гамбургер */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="burger-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--white)",
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
              transition: "transform 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--white)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--white)",
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
              transition: "transform 0.3s",
            }}
          />
        </button>
      </header>

      {/* Мобильное меню */}
      <div
        style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 199,
          background: "rgba(15,15,13,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--F)",
              fontSize: "3rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            {lang === "en" ? l.en : l.ru}
          </Link>
        ))}
        <button
          onClick={() => setLang(lang === "en" ? "ru" : "en")}
          style={langBtn}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>
      </div>

      {/* CSS для медиазапросов */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
          header { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}

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
  fontFamily: "Inter, sans-serif",
};
