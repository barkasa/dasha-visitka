import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

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
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Бренд */}
        <div>
          <div className={styles.footerName}>Daria Morozova</div>
          <p className={styles.footerDesc}>{txt.desc}</p>
        </div>

        {/* Меню */}
        <div>
          <h4 className={styles.colTitle}>{txt.menu}</h4>
          {[
            ["/", lang === "en" ? "Home" : "Главная"],
            ["/about", lang === "en" ? "About" : "О себе"],
            ["/projects", lang === "en" ? "Projects" : "Проекты"],
            ["/gallery", lang === "en" ? "Gallery" : "Галерея"],
            ["/contacts", lang === "en" ? "Contact" : "Контакты"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className={styles.colLink}>
              {label}
            </Link>
          ))}
        </div>

        {/* Соцсети */}
        <div>
          <h4 className={styles.colTitle}>{txt.social}</h4>
          {[
            ["WhatsApp", "https://wa.me/+491781047636"],
            ["Telegram", "https://t.me/daria_kunst"],

            ["Instagram-art", "https://instagram.com/mdari.a_kunst"],
            [
              "LinkedIn",
              "https://www.linkedin.com/in/daria-morozova-54201015/",
            ],
            ["ArtStation", "https://mdaria.artstation.com/"],
            ["Facebook", "https://facebook.com/daria.morozova.31"],
          ].map(([label, url]) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Контакты */}
        <div>
          <h4 className={styles.colTitle}>{txt.contact}</h4>
          <p className={styles.colText}>dasha.led@gmail.com</p>
          <p className={styles.colText}>Düsseldorf, Germany</p>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          © 2026 Daria Morozova. {txt.rights}
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link
            to="/impressum"
            className={styles.footerBottomText}
            style={{ textDecoration: "none" }}
          >
            Impressum
          </Link>
        </div>
        <p className={styles.footerBottomText}>
          {lang === "en"
            ? "Design & Dev — Ivan Morozov"
            : "Дизайн и разработка — Иван Морозов"}
        </p>
      </div>
    </footer>
  );
}
