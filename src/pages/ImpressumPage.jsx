import PageTitle from "../components/PageTitle";
import styles from "./AboutPage.module.css";

export default function ImpressumPage({ lang }) {
  return (
    <div className={styles.page}>
      <PageTitle title="Impressum" />
      <div className={styles.inner}>
        <p className={styles.tag}>
          <span className={styles.tagLine} />
          Legal
        </p>

        <h1 className={styles.name} style={{ marginBottom: "48px" }}>
          Impressum
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
              Angaben gemäß § 5 TMG
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
              Kontakt
            </strong>
            <br />
            <br />
            Telefon: +49 178 1047636
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
              Steuernummer
            </strong>
            <br />
            <br />
            [Steuernummer eintragen]
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
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </strong>
            <br />
            <br />
            Daria Morozova
            <br />
            [Adresse]
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
              Haftungsausschluss
            </strong>
            <br />
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>

          <p>
            <strong
              style={{
                color: "var(--white)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
                textTransform: "uppercase",
              }}
            >
              Urheberrecht
            </strong>
            <br />
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
}
