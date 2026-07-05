import { useState, useEffect } from "react";
import styles from "./Preloader.module.css";

export default function Preloader({ lang }) {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHide(true), 2000);
    const t2 = setTimeout(() => setGone(true), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`${styles.preloader} ${hide ? styles.preloaderHide : ""}`}>
      <h1 className={styles.name}>
        m'<em className={styles.nameAccent}>Daria</em>
      </h1>
      <div className={styles.line} />
      <p className={styles.role}>
        {lang === "en"
          ? "Designer · Artist · Illustrator"
          : "Дизайнер · Художник · Иллюстратор"}
      </p>
    </div>
  );
}
