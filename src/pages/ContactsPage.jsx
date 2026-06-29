import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactsPage({ lang }) {
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const t = {
    en: {
      tag: "Get in Touch",
      title: "Let's create something",
      accent: "beautiful together",
      body: "Open to commissions, collaborations, and new creative projects. Write to me — I would love to hear your ideas.",
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message →",
      sending: "Sending...",
    },
    ru: {
      tag: "Связаться",
      title: "Давайте создадим что-то",
      accent: "прекрасное вместе",
      body: "Открыта к заказам, коллаборациям и творческим проектам. Напишите мне — буду рада познакомиться с вашими идеями.",
      name: "Ваше имя",
      email: "Ваш email",
      message: "Сообщение",
      send: "Отправить →",
      sending: "Отправляем...",
    },
  };
  const txt = t[lang];

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/maqgbolg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      navigate("/success");
    } else {
      setSending(false);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        padding: "120px 48px 80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--stone)",
            marginBottom: "48px",
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
          {/* Левая колонка */}
          <div>
            <h1
              style={{
                fontFamily: "var(--F)",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              {txt.title}
              <br />
              <em style={{ fontStyle: "italic", color: "var(--warm)" }}>
                {txt.accent}
              </em>
            </h1>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.4)",
                marginBottom: "48px",
              }}
            >
              {txt.body}
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                ["Email", "hello@dariamorozova.com"],
                ["Instagram", "@dariamorozova"],
                ["Behance", "behance.net/dariamorozova"],
                ["Telegram", "@dariamorozova"],
              ].map(([type, val]) => (
                <div
                  key={type}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      minWidth: "70px",
                    }}
                  >
                    {type}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {[
              {
                name: "name",
                label: txt.name,
                type: "text",
                placeholder: "Jane Smith",
              },
              {
                name: "email",
                label: txt.email,
                type: "email",
                placeholder: "jane@example.com",
              },
            ].map((field) => (
              <div
                key={field.name}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--stone)",
                  }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                    padding: "10px 0",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--white)",
                    outline: "none",
                  }}
                />
              </div>
            ))}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <label
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--stone)",
                }}
              >
                {txt.message}
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  padding: "10px 0",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--white)",
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              style={{
                alignSelf: "flex-start",
                background: sending ? "var(--stone)" : "var(--white)",
                color: "var(--ink)",
                border: "none",
                padding: "14px 40px",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: sending ? "not-allowed" : "pointer",
                borderRadius: "1px",
                transition: "background 0.2s",
              }}
            >
              {sending ? txt.sending : txt.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
