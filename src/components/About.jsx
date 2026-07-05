import useInView from "../hooks/useInView";
import styles from "./About.module.css";

export default function About({ lang }) {
  const t = {
    en: {
      tag: "About the Artist",
      headline: ["Art as a language", "of"],
      accent: "inner worlds",
      body1:
        "Daria Morozova is a designer and artist working at the intersection of fine art and visual communication. Her work moves through illustration, brand identity, and mixed media — driven by a belief that every image carries emotional weight.",
      body2:
        "Based in Dusseldorf, Germany. Available worldwide for commissions, collaborations, and creative projects.",
      years: "Years",
      works: "Works",
      clients: "Clients",
      photo: "[ Portrait ]",
      download: "Download Portfolio (PDF)",
    },
    ru: {
      tag: "О художнике",
      headline: ["Искусство как язык", ""],
      accent: "внутренних миров",
      body1:
        "Дарья Морозова — дизайнер и художник, работающая на стыке изобразительного искусства и визуальной коммуникации. Её работы охватывают иллюстрацию, айдентику и смешанные техники.",
      body2:
        "Живёт и работает в Дюссельдорфе, Германия. Открыта к заказам и коллаборациям по всему миру.",
      years: "Лет",
      works: "Работ",
      clients: "Клиентов",
      photo: "[ Портрет ]",
      download: "Скачать портфолио (PDF)",
    },
  };
  const txt = t[lang];
  const [ref, inView] = useInView();
  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} fadeIn ${inView ? "visible" : ""}`}
    >
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine}></span>
          {txt.tag}
        </p>

        <div className={styles.layout}>
          {/* <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <span className={styles.photoText}>{txt.photo}</span>
            </div>
            <div className={styles.photoLabel}>Daria Morozova</div>
          </div> */}
          <div className={styles.photo}>
            <img
              src="https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/foto/Hero-foto.jpeg"
              alt="Daria Morozova"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "80% 40%",
                filter: "grayscale(40%) contrast(1.1)",
                display: "block",
              }}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className={styles.headline}>
              {txt.headline[0]}
              <br />
              {txt.headline[1]}{" "}
              <em className={styles.headlineAccent}>{txt.accent}</em>
            </h2>

            <p className={styles.body}>{txt.body1}</p>
            <p className={styles.body}>{txt.body2}</p>

            <div className={styles.divider}></div>

            <div className={styles.stats}>
              {[
                ["8+", txt.years],
                ["120+", txt.works],
                ["30+", txt.clients],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className={styles.statNum}>{num}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>

            <a
              href="/portfolio-daria-morozova.pdf"
              download
              className={styles.downloadBtn}
            >
              {txt.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
