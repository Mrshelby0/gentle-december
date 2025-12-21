import { motion } from "framer-motion";
import LoveCounter from "./LoveCounter";

export default function Interactive() {
  const reasons = [
    { emoji: "🌟", text: "Your kindness lights up every room" },
    { emoji: "💫", text: "Your laughter is my favorite sound" },
    { emoji: "🌸", text: "Your presence makes everything better" },
    { emoji: "✨", text: "You make ordinary moments magical" },
  ];

  return (
    <section
      style={{
        flexDirection: "column",
        gap: "3rem",
        background: "linear-gradient(135deg, #fed6e3 0%, #ffecd2 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "Playfair Display",
          fontSize: "2.5rem",
          color: "#c06c84",
          textAlign: "center",
        }}
      >
        Just a few reasons why I love you...
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: "1000px",
        }}
      >
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{
              padding: "1.5rem",
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "15px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 25px rgba(192, 108, 132, 0.15)",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
              {reason.emoji}
            </div>
            <p style={{ fontSize: "1rem", opacity: 0.9 }}>{reason.text}</p>
          </motion.div>
        ))}
      </div>

      <LoveCounter />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          fontStyle: "italic",
          marginTop: "2rem",
        }}
      >
        There are countless more reasons, but infinity is hard to count... 💕
      </motion.p>
    </section>
  );
}
