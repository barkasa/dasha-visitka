export default function AboutPage({ lang }) {
  const t = {
    en: {
      tag: "About",
      name: "Daria Morozova",
      role: "Graphic Designer · Artist · Illustrator",
      location: "Düsseldorf, Germany",
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
      name: "Дарья Морозова",
      role: "Графический дизайнер · Художник · Иллюстратор",
      location: "Дюссельдорф, Германия",
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
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Тег */}
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "60px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "1px",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          {txt.tag}
        </p>

        {/* Шапка */}
        <div style={{ marginBottom: "80px" }}>
          <h1
            style={{
              fontFamily: "var(--F)",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              marginBottom: "16px",
            }}
          >
            {txt.name.split(" ")[0]}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
              {txt.name.split(" ")[1]}
            </em>
          </h1>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: "8px",
            }}
          >
            {txt.role}
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)" }}>
            📍 {txt.location}
          </p>
        </div>

        {/* Био */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "80px",
            paddingBottom: "80px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {txt.bio1}
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {txt.bio2}
          </p>
        </div>

        {/* Образование + Членство */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "80px",
            paddingBottom: "80px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--F)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "32px",
              }}
            >
              {txt.eduTitle}
            </h2>
            {txt.edu.map((e, i) => (
              <TimelineItem key={i} item={e} />
            ))}
            <h2
              style={{
                fontFamily: "var(--F)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--white)",
                margin: "48px 0 32px",
              }}
            >
              {txt.memberTitle}
            </h2>
            {txt.members.map((m, i) => (
              <TimelineItem key={i} item={m} />
            ))}
          </div>

          {/* Выставки */}
          <div>
            <h2
              style={{
                fontFamily: "var(--F)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--white)",
                marginBottom: "32px",
              }}
            >
              {txt.exhibTitle}
            </h2>
            {txt.exhib.map((e, i) => (
              <TimelineItem key={i} item={e} />
            ))}
          </div>
        </div>

        {/* Навыки */}
        <div>
          <h2
            style={{
              fontFamily: "var(--F)",
              fontSize: "1.8rem",
              fontWeight: 300,
              color: "var(--white)",
              marginBottom: "32px",
            }}
          >
            {txt.skillsTitle}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {txt.skills.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: "8px 20px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  borderRadius: "2px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        paddingBottom: "24px",
        marginBottom: "24px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--warm)",
          minWidth: "60px",
          paddingTop: "4px",
        }}
      >
        {item.year}
      </span>
      <div>
        <div
          style={{
            fontSize: "0.9rem",
            color: "var(--white)",
            marginBottom: "4px",
          }}
        >
          {item.title}
        </div>
        <div style={{ fontSize: "0.75rem", color: "var(--stone)" }}>
          {item.place}
        </div>
      </div>
    </div>
  );
}
