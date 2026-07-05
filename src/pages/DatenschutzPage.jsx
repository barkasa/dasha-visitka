import PageTitle from "../components/PageTitle";
import styles from "./LegalPage.module.css";

export default function DatenschutzPage() {
  return (
    <div className={styles.page}>
      <PageTitle title="Datenschutz" />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          Legal
        </p>

        <h1 className={styles.title}>Datenschutzerklärung</h1>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>1. Datenschutz auf einen Blick</p>
          <p className={styles.text}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>2. Verantwortliche Stelle</p>
          <p className={styles.text}>
            <span className={styles.highlight}>Daria Morozova</span>
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] Düsseldorf
            <br />
            Deutschland
            <br />
            <br />
            E-Mail: <a href="mailto:dasha.led@gmail.com">dasha.led@gmail.com</a>
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>3. Kontaktformular</p>
          <p className={styles.text}>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            <br />
            <br />
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>4. Drittanbieter</p>
          <p className={styles.text}>
            <span className={styles.highlight}>Formspree</span>
            <br />
            Für Kontaktformular-Anfragen nutzen wir Formspree (Formspree, Inc.,
            USA).
            <br />
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Formspree →
            </a>
            <br />
            <br />
            <span className={styles.highlight}>Vercel</span>
            <br />
            Diese Website wird auf Servern von Vercel Inc., USA gehostet.
            <br />
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Vercel →
            </a>
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>5. Ihre Rechte</p>
          <p className={styles.text}>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
            oder Löschung dieser Daten.
            <br />
            <br />
            Kontakt:{" "}
            <a href="mailto:dasha.led@gmail.com">dasha.led@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
