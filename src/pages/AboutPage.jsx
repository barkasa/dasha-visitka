import PageTitle from "../components/PageTitle";
import styles from "./AboutPage.module.css";

export default function AboutPage({ lang }) {
  const t = {
    en: {
      tag: "About",
      role: "Graphic Designer · Artist · Illustrator",
      location: "📍 Düsseldorf, Germany",
      bio1: "Daria Morozova is a graphic designer, artist and illustrator with over 8 years of professional experience. Her work spans brand identity, illustration, editorial design and fine art — united by a deep belief that visual language can carry meaning, emotion and beauty simultaneously.",
      bio2: "Born and educated in Kyrgyzstan, Daria is a member of the Union of Artists of Kyrgyzstan. Her work has been exhibited in Kyrgyzstan and Germany, reflecting a creative path that bridges Central Asian artistic traditions with European contemporary design.",
      eduTitle: "Education",
      edu: [
        {
          year: "2005–2010",
          title: "Fine Arts & Graphic Design",
          place: "[University name], Bishkek, Kyrgyzstan",
        },
      ],
      memberTitle: "Memberships",
      members: [
        {
          year: "2012",
          title: "Member of the Union of Artists of Kyrgyzstan",
          place: "Bishkek, Kyrgyzstan",
        },
      ],
      exhibTitle: "Exhibitions",
      exhib: [
        {
          year: "2024",
          title: "[Exhibition name]",
          place: "Düsseldorf, Germany",
        },
        {
          year: "2023",
          title: "[Exhibition name]",
          place: "Düsseldorf, Germany",
        },
        {
          year: "2022",
          title: "[Exhibition name]",
          place: "Bishkek, Kyrgyzstan",
        },
        {
          year: "2020",
          title: "[Exhibition name]",
          place: "Bishkek, Kyrgyzstan",
        },
        {
          year: "2018",
          title: "[Exhibition name]",
          place: "Bishkek, Kyrgyzstan",
        },
      ],
      skillsTitle: "Skills & Tools",
      skills: [
        "Brand Identity",
        "Illustration",
        "Editorial Design",
        "Packaging",
        "Batik",
        "Acrylic & Oil Painting",
        "Watercolour",
        "Alcohol Ink",
        "Decorative Art",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
      ],
    },
    ru: {
      tag: "О себе",
      role: "Графический дизайнер · Художник · Иллюстратор",
      location: "📍 Дюссельдорф, Германия",
      bio1: "Дарья Морозова — графический дизайнер, художник и иллюстратор с более чем 8-летним профессиональным опытом. Её работы охватывают айдентику, иллюстрацию, редакционный дизайн и изобразительное искусство.",
      bio2: "Родилась и получила образование в Кыргызстане, является членом Союза художников Кыргызстана. Работы выставлялись в Кыргызстане и Германии.",
      eduTitle: "Образование",
      edu: [
        {
          year: "2005–2010",
          title: "Изобразительное искусство и графический дизайн",
          place: "[Название университета], Бишкек, Кыргызстан",
        },
      ],
      memberTitle: "Членство",
      members: [
        {
          year: "2012",
          title: "Член Союза художников Кыргызстана",
          place: "Бишкек, Кыргызстан",
        },
      ],
      exhibTitle: "Выставки",
      exhib: [
        {
          year: "2024",
          title: "[Название выставки]",
          place: "Дюссельдорф, Германия",
        },
        {
          year: "2023",
          title: "[Название выставки]",
          place: "Дюссельдорф, Германия",
        },
        {
          year: "2022",
          title: "[Название выставки]",
          place: "Бишкек, Кыргызстан",
        },
        {
          year: "2020",
          title: "[Название выставки]",
          place: "Бишкек, Кыргызстан",
        },
        {
          year: "2018",
          title: "[Название выставки]",
          place: "Бишкек, Кыргызстан",
        },
      ],
      skillsTitle: "Навыки и инструменты",
      skills: [
        "Айдентика",
        "Иллюстрация",
        "Редакционный дизайн",
        "Упаковка",
        "Батик",
        "Акрил и масло",
        "Акварель",
        "Алкогольные чернила",
        "Декоративное искусство",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
      ],
    },
  };
  const txt = t[lang];

  return (
    <div className={styles.page}>
      // в return первой строкой:
      <PageTitle title={lang === "en" ? "About" : "О себе"} />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          {txt.tag}
        </p>

        {/* Шапка */}
        <div className={styles.hero}>
          <h1 className={styles.name}>
            Daria
            <br />
            <em className={styles.nameAccent}>Morozova</em>
          </h1>
          <p className={styles.role}>{txt.role}</p>
          <p className={styles.location}>{txt.location}</p>
        </div>

        {/* Био */}
        <div className={styles.bioGrid}>
          <p className={styles.bioText}>{txt.bio1}</p>
          <p className={styles.bioText}>{txt.bio2}</p>
        </div>

        {/* Образование + Выставки */}
        <div className={styles.section}>
          <div className={styles.sectionGrid}>
            <div>
              <h2 className={styles.sectionTitle}>{txt.eduTitle}</h2>
              {txt.edu.map((e, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{e.year}</span>
                  <div>
                    <div className={styles.timelineTitle}>{e.title}</div>
                    <div className={styles.timelinePlace}>{e.place}</div>
                  </div>
                </div>
              ))}

              <h2 className={styles.sectionTitle} style={{ marginTop: "48px" }}>
                {txt.memberTitle}
              </h2>
              {txt.members.map((m, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <div>
                    <div className={styles.timelineTitle}>{m.title}</div>
                    <div className={styles.timelinePlace}>{m.place}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className={styles.sectionTitle}>{txt.exhibTitle}</h2>
              {txt.exhib.map((e, i) => (
                <div key={i} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{e.year}</span>
                  <div>
                    <div className={styles.timelineTitle}>{e.title}</div>
                    <div className={styles.timelinePlace}>{e.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Навыки */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>{txt.skillsTitle}</h2>
          <div className={styles.skills}>
            {txt.skills.map((skill, i) => (
              <span key={i} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
