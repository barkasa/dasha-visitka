export default function About({ lang }) {
  const t = {
    en: {
      tag: "About the Artist",
      headline: ["Art as a language", "of"],
      accent: "inner worlds",
      body1:
        "Daria Morozova is a designer and artist working at the intersection of fine art and visual communication. Her work moves through illustration, brand identity, and mixed media — driven by a belief that every image carries emotional weight.",
      body2:
        "Based in [City]. Available worldwide for commissions, collaborations, and creative projects.",
      years: "Years",
      works: "Works",
      clients: "Clients",
      photo: "[ Portrait ]",
    },
    ru: {
      tag: "О художнике",
      headline: ["Искусство как язык", ""],
      accent: "внутренних миров",
      body1:
        "Дарья Морозова — дизайнер и художник, работающая на стыке изобразительного искусства и визуальной коммуникации. Её работы охватывают иллюстрацию, айдентику и смешанные техники.",
      body2:
        "Живёт и работает в [Город]. Открыта к заказам и коллаборациям по всему миру.",
      years: "Лет",
      works: "Работ",
      clients: "Клиентов",
      photo: "[ Портрет ]",
    },
  };
  const txt = t[lang];

  return (
    <section
      id="about"
      style={{
        background: "var(--cream)",
        color: "var(--ink)",
        padding: "100px 48px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "56px",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Фото */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "linear-gradient(160deg, #D5C8B8 0%, #B8A898 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(0,0,0,0.25)",
                }}
              >
                {txt.photo}
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "var(--ink)",
                color: "var(--white)",
                padding: "16px 24px",
                fontFamily: "var(--F)",
                fontSize: "1rem",
                fontStyle: "italic",
              }}
            >
              Daria Morozova
            </div>
          </div>

          {/* Текст */}
          <div>
            <h2
              style={{
                fontFamily: "var(--F)",
                fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                marginBottom: "32px",
              }}
            >
              {txt.headline[0]}
              <br />
              {txt.headline[1]}{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                {txt.accent}
              </em>
            </h2>

            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.85,
                color: "#4A4A46",
                marginBottom: "16px",
              }}
            >
              {txt.body1}
            </p>
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.85,
                color: "#4A4A46",
              }}
            >
              {txt.body2}
            </p>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--warm)",
                margin: "32px 0",
              }}
            />

            <div style={{ display: "flex", gap: "48px" }}>
              {[
                ["8+", txt.years],
                ["120+", txt.works],
                ["30+", txt.clients],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--F)",
                      fontSize: "3rem",
                      fontWeight: 300,
                      color: "var(--accent)",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      marginTop: "6px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
