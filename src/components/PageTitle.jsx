import { useEffect } from "react";

export default function PageTitle({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} — Daria Morozova`
      : "m'Daria — Designer & Artist";

    // Обновляем description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      description ||
      "Portfolio of Daria Morozova — graphic designer, artist and illustrator based in Düsseldorf, Germany.";
  }, [title, description]);

  return null;
}
