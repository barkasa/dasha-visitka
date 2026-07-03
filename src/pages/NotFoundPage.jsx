import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage({ lang }) {
  return (
    <div className={styles.page}>
      <PageTitle title={lang === "en" ? "404" : "404"} />
      <p className={styles.tag}>404</p>
      <h1 className={styles.title}>
        {lang === "en" ? "Page not found" : "Страница не найдена"}
        <br />
        <em className={styles.titleAccent}>
          {lang === "en" ? "Lost in the studio?" : "Заблудились в мастерской?"}
        </em>
      </h1>
      <Link to="/" className={styles.link}>
        {lang === "en" ? "← Back to Home" : "← На главную"}
      </Link>
    </div>
  );
}
