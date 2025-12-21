import { motion } from "framer-motion";
import { useState } from "react";

export default function ThisOrThat() {
  const prompts = [
    { left: "Coffee", right: "Tea" },
    { left: "Cardio", right: "Weights" },
    { left: "Sunrise", right: "Sunset" },
    { left: "Beach", right: "Mountains" },
    { left: "Netflix", right: "Long walk" },
    { left: "Pizza", right: "Sushi" },
  ];

  const [choices, setChoices] = useState({});

  const pick = (i, side) => {
    setChoices((prev) => ({ ...prev, [i]: side }));
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #16213e 0%, #0f3460 100%)",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.8rem",
          color: "white",
          fontFamily: "Playfair Display",
          background: "linear-gradient(45deg, #ff6b9d, #ffa07a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
        }}
      >
        This or That?
      </motion.h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {prompts.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => pick(i, "left")}
              style={{
                padding: "1rem 1.2rem",
                borderRadius: "14px",
                border: choices[i] === "left" ? "2px solid #ff6b9d" : "1px solid rgba(255,255,255,0.2)",
                background: choices[i] === "left" ? "rgba(255,107,157,0.15)" : "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1.05rem",
                cursor: "pointer",
              }}
            >
              {p.left}
            </motion.button>

            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", textAlign: "center" }}>
              vs
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => pick(i, "right")}
              style={{
                padding: "1rem 1.2rem",
                borderRadius: "14px",
                border: choices[i] === "right" ? "2px solid #ff6b9d" : "1px solid rgba(255,255,255,0.2)",
                background: choices[i] === "right" ? "rgba(255,107,157,0.15)" : "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: "1.05rem",
                cursor: "pointer",
              }}
            >
              {p.right}
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          color: "white",
          fontSize: "1rem",
          opacity: 0.7,
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Picking answers is optional—this is just for fun 😊
      </motion.p>
    </section>
  );
}
