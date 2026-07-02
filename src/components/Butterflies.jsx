import { useState, useEffect, useRef } from "react";
import styles from "./Butterflies.module.css";

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function Butterflies({ trigger, originX, originY }) {
  const [butterflies, setButterflies] = useState([]);
  const timersRef = useRef([]);

  useEffect(() => {
    if (!trigger) return;

    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];

    const count = 3;
    const newButterflies = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      startX: originX,
      startY: originY,
      targetX: randomBetween(10, 85),
      targetY: randomBetween(10, 75),
      duration: randomBetween(2000, 3500),
      delay: i * 200,
      opacity: 1,
      size: randomBetween(0.9, 1.4),
      moving: false,
    }));

    setButterflies(newButterflies);

    // Запускаем движение через 50ms
    const startMove = setTimeout(() => {
      setButterflies((prev) => prev.map((b) => ({ ...b, moving: true })));
    }, 50);
    timersRef.current.push(startMove);

    // Исчезаем
    newButterflies.forEach((b) => {
      const t = setTimeout(
        () => {
          setButterflies((prev) =>
            prev.map((p) => (p.id === b.id ? { ...p, opacity: 0 } : p)),
          );
        },
        b.delay + b.duration + 1000,
      );
      timersRef.current.push(t);
    });

    const cleanup = setTimeout(() => setButterflies([]), 5500);
    timersRef.current.push(cleanup);

    return () => timersRef.current.forEach((t) => clearTimeout(t));
  }, [trigger]);

  return (
    <>
      {butterflies.map((b) => (
        <div
          key={b.id}
          className={styles.butterfly}
          style={{
            left: b.moving ? `${b.targetX}vw` : `${b.startX}px`,
            top: b.moving ? `${b.targetY}vh` : `${b.startY}px`,
            opacity: b.opacity,
            transform: `scale(${b.size})`,
            transition: b.moving
              ? `left ${b.duration}ms cubic-bezier(0.4,0,0.2,1) ${b.delay}ms,
               top ${b.duration}ms cubic-bezier(0.4,0,0.2,1) ${b.delay}ms,
               opacity 0.8s ease`
              : "none",
          }}
        >
          <div className={styles.wing}>
            <div className={styles.wingLeft} />
            <div className={styles.wingRight} />
            <div className={styles.body} />
          </div>
        </div>
      ))}
    </>
  );
}
