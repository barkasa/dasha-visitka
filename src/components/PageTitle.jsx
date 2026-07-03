import { useEffect } from "react";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} — Daria Morozova`
      : "m'Daria — Designer & Artist";
  }, [title]);

  return null;
}
