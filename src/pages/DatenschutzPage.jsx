import PageTitle from "../components/PageTitle";
import styles from "./AboutPage.module.css";

export default function DatenschutzPage({ lang }) {
  return (
    <div className={styles.page}>
      <PageTitle title="Datenschutz" />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          Legal
        </p>

        <h1 className={styles.name} style={{ marginBottom: "48px" }}>
          Datenschutzerklärung
        </h1>

        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8,
            fontSize: "0.9rem",
          }}
        >
          <p style={{ marginBottom: "32px" }}>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              1. Datenschutz auf einen Blick
            </strong>
            <br />
            <br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <p style={{ marginBottom: "32px" }}>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              2. Verantwortliche Stelle
            </strong>
            <br />
            <br />
            Daria Morozova
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] Düsseldorf
            <br />
            Deutschland
            <br />
            <br />
            E-Mail: dasha.led@gmail.com
          </p>

          <p style={{ marginBottom: "32px" }}>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              3. Datenerfassung auf dieser Website
            </strong>
            <br />
            <br />
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>
              Kontaktformular
            </strong>
            <br />
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
            <br />
            <br />
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist.
          </p>

          <p style={{ marginBottom: "32px" }}>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              4. Drittanbieter
            </strong>
            <br />
            <br />
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>
              Formspree
            </strong>
            <br />
            Für die Verarbeitung von Kontaktformular-Anfragen nutzen wir den
            Dienst Formspree (Formspree, Inc., USA). Die Datenschutzerklärung
            von Formspree finden Sie unter:
            https://formspree.io/legal/privacy-policy
            <br />
            <br />
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Vercel</strong>
            <br />
            Diese Website wird auf Servern von Vercel Inc., USA gehostet. Die
            Datenschutzerklärung von Vercel finden Sie unter:
            https://vercel.com/legal/privacy-policy
          </p>

          <p style={{ marginBottom: "32px" }}>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              5. Ihre Rechte
            </strong>
            <br />
            <br />
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
            oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
            Thema personenbezogene Daten können Sie sich jederzeit an uns
            wenden: dasha.led@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
