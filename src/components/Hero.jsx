// import styles from "./Hero.module.css";

// export default function Hero({ lang }) {
//   const t = {
//     en: {
//       tag: "Designer · Artist",
//       tagline: ["Visual Identity", "Illustration", "Fine Art"],
//       scroll: "Scroll to explore",
//     },
//     ru: {
//       tag: "Дизайнер · Художник",
//       tagline: ["Визуальная айдентика", "Иллюстрация", "Живопись"],
//       scroll: "Листайте вниз",
//     },
//   };
//   const txt = t[lang];

//   return (
//     <section id="home" className={styles.hero}>
//       {/* Фото Дарьи */}
//       <div className={styles.photoPlaceholder}>
//         <img
//           src="https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/Foto/photo_2026-06-30_19-12-07.jpg"
//           alt="Daria Morozova"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "center top",
//           }}
//         />
//       </div>

//       <div className={styles.fade} />

//       <div className={styles.content}>
//         <p className={styles.tag}>{txt.tag}</p>

//         <h1 className={styles.name}>
//           Daria
//           <span className={styles.nameAccent}>Morozova</span>
//         </h1>

//         <p className={styles.tagline}>
//           {txt.tagline.map((line, i) => (
//             <span key={i}>
//               {line}
//               <br />
//             </span>
//           ))}
//         </p>

//         <div className={styles.scrollHint}>
//           <div className={styles.scrollBar} />
//           {txt.scroll}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import styles from "./Hero.module.css";
import Butterflies from "./Butterflies";

export default function Hero({ lang }) {
  const [trigger, setTrigger] = useState(0);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  function handlePhotoHover(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setTrigger((t) => t + 1);
  }

  const t = {
    en: {
      tag: "Designer · Artist",
      tagline: ["Visual Identity", "Illustration", "Fine Art"],
      scroll: "Scroll to explore",
    },
    ru: {
      tag: "Дизайнер · Художник",
      tagline: ["Визуальная айдентика", "Иллюстрация", "Живопись"],
      scroll: "Листайте вниз",
    },
  };
  const txt = t[lang];

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.photoPlaceholder} onMouseEnter={handlePhotoHover}>
        <img
          src="https://kfkzcuqao3n7ppvh.public.blob.vercel-storage.com/silk%20Batik%201/Foto/photo_2026-06-30_19-12-07.jpg"
          alt="Daria Morozova"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>

      <div className={styles.fade} />

      <div className={styles.content}>
        <p className={styles.tag}>{txt.tag}</p>
        <h1 className={styles.name}>
          Daria
          <span className={styles.nameAccent}>Morozova</span>
        </h1>
        <p className={styles.tagline}>
          {txt.tagline.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className={styles.scrollHint}>
          <div className={styles.scrollBar} />
          {txt.scroll}
        </div>
      </div>

      <Butterflies trigger={trigger} originX={origin.x} originY={origin.y} />
    </section>
  );
}
