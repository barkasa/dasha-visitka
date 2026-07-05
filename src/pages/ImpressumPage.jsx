import PageTitle from "../components/PageTitle";
import styles from "./LegalPage.module.css";

export default function ImpressumPage() {
  return (
    <div className={styles.page}>
      <PageTitle title="Impressum" />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          Legal
        </p>

        <h1 className={styles.title}>Impressum</h1>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Angaben gemäß § 5 TMG</p>
          <p className={styles.text}>
            <span className={styles.highlight}>Daria Morozova</span>
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ] Düsseldorf
            <br />
            Deutschland
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Kontakt</p>
          <p className={styles.text}>
            Telefon: +49 178 1047636
            <br />
            E-Mail: <a href="mailto:dasha.led@gmail.com">dasha.led@gmail.com</a>
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Steuernummer</p>
          <p className={styles.text}>[Steuernummer eintragen]</p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </p>
          <p className={styles.text}>
            <span className={styles.highlight}>Daria Morozova</span>
            <br />
            [Adresse]
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Haftungsausschluss</p>
          <p className={styles.text}>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionTitle}>Urheberrecht</p>
          <p className={styles.text}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung von Daria Morozova.
          </p>
        </div>
      </div>
    </div>
  );
}
