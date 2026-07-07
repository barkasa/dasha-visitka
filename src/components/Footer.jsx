import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaArtstation,
  FaFacebook,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer({ lang }) {
  const t = {
    en: {
      desc: "Designer, artist and visual storyteller.",
      menu: "Menu",
      contact: "Contact",
      rights: "© 2026 Daria Morozova",
      dev: "Design & Dev — Ivan Morozov",
    },
    ru: {
      desc: "Дизайнер, художник и визуальный нарратор.",
      menu: "Меню",
      contact: "Контакты",
      rights: "© 2026 Daria Morozova",
      dev: "Дизайн и разработка — Иван Морозов",
    },
  };
  const txt = t[lang];

  const socials = [
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/+491781047636",
      label: "WhatsApp",
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/daria_kunst",
      label: "Telegram",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/mdari.a_kunst",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/daria-morozova-54201015/",
      label: "LinkedIn",
    },
    {
      icon: <FaArtstation />,
      url: "https://mdaria.artstation.com/",
      label: "ArtStation",
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/daria.morozova.31",
      label: "Facebook",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className={styles.cols}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandName}>
              m'Daria
            </Link>
            <p className={styles.brandDesc}>{txt.desc}</p>
          </div>

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

          <div>
            <h4 className={styles.colTitle}>{txt.contact}</h4>
            <p className={styles.colText}>dasha.led@gmail.com</p>
            <p className={styles.colText}>+49 178 1047636</p>
            <p className={styles.colText}>Düsseldorf, Germany</p>
          </div>

          <div>
            <h4 className={styles.colTitle}>
              {lang === "en" ? "Gallery" : "Галерея"}
            </h4>
            {[
              ["/gallery/batik", lang === "en" ? "Batik" : "Батик"],
              ["/gallery/painting", lang === "en" ? "Painting" : "Живопись"],
              [
                "/gallery/decorative",
                lang === "en" ? "Decorative" : "Декоративные",
              ],
              ["/gallery/umbrella", lang === "en" ? "Umbrella" : "Зонты"],
            ].map(([to, label]) => (
              <Link key={to} to={to} className={styles.colLink}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.bottomText}>
            {txt.rights}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/impressum" className={styles.bottomLink}>
              Impressum
            </Link>
            <Link to="/datenschutz" className={styles.bottomLink}>
              Datenschutz
            </Link>
          </div>
          <p className={styles.bottomText}>{txt.dev}</p>
        </div>
      </div>
    </footer>
  );
}
