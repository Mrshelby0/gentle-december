import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const GlowingCard = ({ title, content, emoji, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 30px 60px rgba(255, 107, 157, 0.5)",
      }}
      style={{
        position: "relative",
        padding: "2rem",
        background: isHovered
          ? "linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(240, 114, 128, 0.2))"
          : "rgba(255, 107, 157, 0.1)",
        border: "1px solid rgba(255, 107, 157, 0.3)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Glowing background on hover */}
      {isHovered && (
        <motion.div
          layoutId={`glow-${index}`}
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle, rgba(255, 107, 157, 0.3), transparent)",
            filter: "blur(20px)",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <motion.div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          style={{ fontSize: "3rem", marginBottom: "1rem" }}
        >
          {emoji}
        </motion.div>

        <h3
          style={{
            color: "#ff6b9d",
            fontFamily: "Playfair Display",
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          style={{
            color: "white",
            opacity: isHovered ? 1 : 0.7,
            lineHeight: "1.6",
          }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function CardsSection() {
  const cards = [
    {
      emoji: "🌟",
      title: "Your Light",
      content:
        "You illuminate my world in ways words cannot describe. Every moment with you shines brighter than a thousand stars.",
    },
    {
      emoji: "💎",
      title: "Your Essence",
      content:
        "Like a precious gem, you are rare, beautiful, and irreplaceable. Your presence makes everything precious.",
    },
    {
      emoji: "🌺",
      title: "Your Grace",
      content:
        "Your elegance and grace flow through everything you do. You make the world more beautiful simply by being in it.",
    },
    {
      emoji: "🔥",
      title: "Your Fire",
      content:
        "Your passion, your strength, your spirit - they burn bright and ignite something magical within my soul.",
    },
    {
      emoji: "🌊",
      title: "Your Depth",
      content:
        "Like an ocean, you are deep, mysterious, and endlessly fascinating. I could spend eternity exploring your beauty.",
    },
    {
      emoji: "👑",
      title: "Your Royalty",
      content:
        "You are royalty in every sense - not by birthright, but by the magnificence of your character and heart.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
        padding: "6rem 2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "white",
          fontFamily: "Playfair Display",
          marginBottom: "4rem",
          background: "linear-gradient(45deg, #ff6b9d, #ffa07a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Why You Are My Everything
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {cards.map((card, i) => (
          <GlowingCard
            key={i}
            {...card}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
