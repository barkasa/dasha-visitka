import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import styles from "./SuccessPage.module.css";

export default function SuccessPage({ lang }) {
  return (
    <div className={styles.page}>
      <PageTitle title={lang === "en" ? "Message Sent" : "Отправлено"} />
      <p className={styles.tag}>
        ✓ {lang === "en" ? "Message Sent" : "Сообщение отправлено"}
      </p>
      <h1 className={styles.title}>
        {lang === "en" ? "Thank you!" : "Спасибо!"}
        <br />
        <em className={styles.titleAccent}>
          {lang === "en" ? "I'll be in touch soon." : "Я скоро свяжусь с вами."}
        </em>
      </h1>
      <p className={styles.body}>
        {lang === "en"
          ? "Your message has been received. I typically respond within 1-2 business days."
          : "Ваше сообщение получено. Обычно я отвечаю в течение 1-2 рабочих дней."}
      </p>
      <Link to="/" className={styles.link}>
        {lang === "en" ? "← Back to Home" : "← На главную"}
      </Link>
    </div>
  );
}
