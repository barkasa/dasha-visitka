import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaArtstation,
  FaFacebook,
} from "react-icons/fa";
import PageTitle from "../components/PageTitle";
import styles from "./Contacts.module.css";

export default function ContactsPage({ lang }) {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const t = {
    en: {
      tag: "Get in Touch",
      title: "Let's create something",
      accent: "beautiful together",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message →",
      sending: "Sending...",
      errName: "Please enter your name",
      errEmail: "Please enter a valid email",
      errMessage: "Please write a message",
    },
    ru: {
      tag: "Связаться",
      title: "Давайте создадим что-то",
      accent: "прекрасное вместе",
      name: "Ваше имя",
      email: "Ваш email",
      message: "Сообщение",
      send: "Отправить →",
      sending: "Отправляем...",
      errName: "Пожалуйста, введите имя",
      errEmail: "Пожалуйста, введите корректный email",
      errMessage: "Пожалуйста, напишите сообщение",
    },
  };
  const txt = t[lang];

  function validate(data) {
    const errs = {};
    if (!data.get("name")?.trim()) errs.name = txt.errName;
    const email = data.get("email")?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = txt.errEmail;
    if (!data.get("message")?.trim()) errs.message = txt.errMessage;
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const response = await fetch("https://formspree.io/f/maqgbolg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      navigate("/success");
    } else {
      setSending(false);
      alert("Something went wrong. Please try again.");
    }
  }

  const socials = [
    {
      label: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      url: "https://wa.me/+491781047636",
    },
    {
      label: "Telegram",
      icon: <FaTelegram size={28} />,
      url: "https://t.me/daria_kunst",
    },
    {
      label: "Instagram",
      icon: <FaInstagram size={28} />,
      url: "https://instagram.com/mdari.a_kunst",
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      url: "https://www.linkedin.com/in/daria-morozova-54201015/",
    },
    {
      label: "ArtStation",
      icon: <FaArtstation size={28} />,
      url: "https://mdaria.artstation.com/",
    },
    {
      label: "Facebook",
      icon: <FaFacebook size={28} />,
      url: "https://facebook.com/daria.morozova.31",
    },
  ];

  return (
    <div className={styles.page}>
      <PageTitle title={lang === "en" ? "Contact" : "Контакты"} />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          {txt.tag}
        </p>

        <h1 className={styles.title}>
          {txt.title}
          <br />
          <em className={styles.titleAccent}>{txt.accent}</em>
        </h1>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{txt.name}</label>
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              className={`${styles.formInput} ${errors.name ? styles.error : ""}`}
              onChange={() => setErrors((e) => ({ ...e, name: "" }))}
            />
            {errors.name && (
              <span className={styles.errorMsg}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{txt.email}</label>
            <input
              type="email"
              name="email"
              placeholder="jane@example.com"
              className={`${styles.formInput} ${errors.email ? styles.error : ""}`}
              onChange={() => setErrors((e) => ({ ...e, email: "" }))}
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>{txt.message}</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              className={`${styles.formTextarea} ${errors.message ? styles.error : ""}`}
              onChange={() => setErrors((e) => ({ ...e, message: "" }))}
            />
            {errors.message && (
              <span className={styles.errorMsg}>{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`${styles.submitBtn} ${sending ? styles.submitBtnDisabled : ""}`}
          >
            {sending ? txt.sending : txt.send}
          </button>
        </form>

        {/* Соцсети */}
        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.socialIcon}>{s.icon}</span>
              <span className={styles.socialLabel}>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
