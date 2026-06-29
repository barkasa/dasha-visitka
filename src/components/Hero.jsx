export default function Hero({ lang }) {
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
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 48px 60px",
        background: "var(--ink)",
        overflow: "hidden",
      }}
    >
      {/* Место для фото Дарьи */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "52%",
          background: "linear-gradient(160deg, #2A2520 0%, #1A1510 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "160px",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.1)",
            fontSize: "2rem",
          }}
        >
          ◻
        </div>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          Photo of Daria
        </span>
      </div>

      {/* Градиент поверх фото */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, var(--ink) 42%, transparent 70%)",
        }}
      />

      {/* Контент */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "640px" }}>
        <p
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--warm)",
            marginBottom: "20px",
          }}
        >
          {txt.tag}
        </p>

        <h1
          style={{
            fontFamily: "var(--F)",
            fontSize: "clamp(4rem, 9vw, 8.5rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
          }}
        >
          Daria
          <span
            style={{
              display: "block",
              fontStyle: "italic",
              color: "var(--warm)",
            }}
          >
            Morozova
          </span>
        </h1>

        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            borderLeft: "2px solid var(--warm)",
            paddingLeft: "16px",
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          {txt.tagline.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "rgba(255,255,255,0.2)",
            }}
          />
          {txt.scroll}
        </div>
      </div>
    </section>
  );
}
