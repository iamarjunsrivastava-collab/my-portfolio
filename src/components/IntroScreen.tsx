import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  {
    word: "こんにちは",
    lang: "Japanese",
    font: "'Hiragino Kaku Gothic Pro', 'Yu Gothic', serif",
    size: 56,
    weight: 300,
    letterSpacing: "0.12em",
    color: "#1a1a1a",
    langColor: "#c9a227",
  },
  {
    word: "Hola",
    lang: "Spanish",
    font: "'Georgia', 'Times New Roman', serif",
    size: 72,
    weight: 700,
    letterSpacing: "-2px",
    color: "#1a1a1a",
    langColor: "#c9a227",
    italic: true,
  },
  {
    word: "Hello",
    lang: "English",
    font: "'Arial Black', 'Arial', sans-serif",
    size: 68,
    weight: 900,
    letterSpacing: "-1px",
    color: "#1a1a1a",
    langColor: "#c9a227",
  },
  {
    word: "नमस्ते",
    lang: "Hindi",
    font: "'Noto Sans Devanagari', 'Mangal', serif",
    size: 54,
    weight: 400,
    letterSpacing: "0.05em",
    color: "#1a1a1a",
    langColor: "#c9a227",
  },
  {
    word: "Hallo",
    lang: "German",
    font: "'Courier New', Courier, monospace",
    size: 64,
    weight: 700,
    letterSpacing: "0.18em",
    color: "#1a1a1a",
    langColor: "#c9a227",
  },
];

const EACH_MS = 160;

// Different animation variants per greeting for variety
const variants = [
  // Japanese — fade + scale up
  {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit:    { opacity: 0, scale: 1.15 },
    transition: { duration: 0.1, ease: "easeOut" },
  },
  // Spanish — slide from right
  {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit:    { opacity: 0, x: -60 },
    transition: { duration: 0.1, ease: "easeOut" },
  },
  // English — slide up
  {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -40 },
    transition: { duration: 0.1, ease: "easeOut" },
  },
  // Hindi — fade only
  {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit:    { opacity: 0 },
    transition: { duration: 0.1, ease: "easeInOut" },
  },
  // German — slide from left
  {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit:    { opacity: 0, x: 60 },
    transition: { duration: 0.1, ease: "easeOut" },
  },
];

export default function IntroScreen({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), EACH_MS);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLeaving(true);
        setTimeout(onDone, 300);
      }, EACH_MS + 100);
      return () => clearTimeout(t);
    }
  }, [index, onDone]);

  const g = greetings[index];
  const v = variants[index];

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="intro-wrapper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#f0ead6",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Subtle background accent dot */}
          <div
            style={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "rgba(201,162,39,0.07)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }}
          />

          {/* Progress dots */}
          <div
            style={{
              position: "absolute",
              bottom: 48,
              display: "flex",
              gap: 8,
            }}
          >
            {greetings.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === index ? "#c9a227" : "#d4c9a8",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Greeting word */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={v.initial}
              animate={v.animate}
              exit={v.exit}
              transition={v.transition}
              style={{ textAlign: "center", padding: "0 32px" }}
            >
              {/* The word */}
              <p
                style={{
                  fontSize: g.size,
                  fontWeight: g.weight,
                  fontFamily: g.font,
                  fontStyle: g.italic ? "italic" : "normal",
                  letterSpacing: g.letterSpacing,
                  color: g.color,
                  lineHeight: 1.1,
                  marginBottom: 14,
                  userSelect: "none",
                }}
              >
                {g.word}
              </p>

              {/* Language label */}
              <p
                style={{
                  fontSize: 11,
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: g.langColor,
                  userSelect: "none",
                }}
              >
                {g.lang}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
