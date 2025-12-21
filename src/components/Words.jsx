import { motion } from "framer-motion";

const lines = [
  { text: "You light up my world", emoji: "✨" },
  { text: "You make everything beautiful", emoji: "🌸" },
  { text: "Your smile is my favorite thing", emoji: "😊" },
  { text: "You are my peace, my joy, my everything", emoji: "💫" },
  { text: "Every moment with you is a gift", emoji: "🎁" },
  { text: "You are loved beyond measure", emoji: "💝" },
];

export default function Words() {
  return (
    <section
      style={{
        flexDirection: "column",
        gap: "3rem",
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ffecd2 100%)",
      }}
    >
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(192, 108, 132, 0.2)",
          }}
        >
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
            viewport={{ once: true }}
            style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
          >
            {line.emoji}
          </motion.p>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2rem",
              color: "#c06c84",
            }}
          >
            {line.text}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
