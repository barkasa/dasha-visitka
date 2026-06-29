import { Link } from "react-router-dom";

export default function SuccessPage({ lang }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--ink)",
        color: "var(--white)",
        textAlign: "center",
        padding: "48px",
      }}
    >
      <p
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: "24px",
        }}
      >
        ✓ {lang === "en" ? "Message Sent" : "Сообщение отправлено"}
      </p>

      <h1
        style={{
          fontFamily: "var(--F)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 300,
          marginBottom: "24px",
          lineHeight: 1.1,
        }}
      >
        {lang === "en" ? "Thank you!" : "Спасибо!"}
        <br />
        <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
          {lang === "en" ? "I'll be in touch soon." : "Я скоро свяжусь с вами."}
        </em>
      </h1>

      <p
        style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "48px",
          maxWidth: "400px",
          lineHeight: 1.7,
        }}
      >
        {lang === "en"
          ? "Your message has been received. I typically respond within 1-2 business days."
          : "Ваше сообщение получено. Обычно я отвечаю в течение 1-2 рабочих дней."}
      </p>

      <Link
        to="/"
        style={{
          fontSize: "0.68rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--white)",
          textDecoration: "none",
          borderBottom: "1px solid var(--warm)",
          paddingBottom: "4px",
        }}
      >
        {lang === "en" ? "← Back to Home" : "← На главную"}
      </Link>
    </div>
  );
}
