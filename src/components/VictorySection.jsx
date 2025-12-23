import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";

const PetalFall = () => {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360 * Math.random()],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeIn",
          }}
          style={{
            position: "fixed",
            left: Math.random() * window.innerWidth,
            top: -20,
            fontSize: "2rem",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          🌹
        </motion.div>
      ))}
    </>
  );
};

export default function VictorySection() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PetalFall />

      {showConfetti && (
        <Confetti
          numberOfPieces={300}
          colors={[
            "#ff6b9d",
            "#f67280",
            "#ffa07a",
            "#ffb3ba",
            "#ffc3d5",
            "#ff85a1",
          ]}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", type: "spring" }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "white",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "6rem",
            marginBottom: "2rem",
          }}
        >
          💕
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "Playfair Display",
            fontSize: "4rem",
            marginBottom: "1rem",
            background: "linear-gradient(45deg, #ff6b9d, #ffa07a, #ffb3ba)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          So... What Now?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.5rem",
            opacity: 0.8,
            marginBottom: "2rem",
            maxWidth: "600px",
            lineHeight: "1.8",
          }}
        >
          I made this because I genuinely want to do something for you, a gift that lasts long and want to do something different. Something that shows I care.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.5 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.2rem",
            opacity: 0.7,
            marginBottom: "3rem",
            fontStyle: "italic",
          }}
        >
          Let's see where this goes. Together. 💕
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 40px rgba(255, 107, 157, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowConfetti(true)}
          style={{
            padding: "1.2rem 3rem",
            fontSize: "1.2rem",
            background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
            color: "white",
            border: "2px solid rgba(255, 107, 157, 0.5)",
            borderRadius: "50px",
            cursor: "pointer",
            fontFamily: "Playfair Display",
            fontWeight: "600",
            letterSpacing: "2px",
            boxShadow: "0 15px 40px rgba(255, 107, 157, 0.4)",
          }}
        >
          CHRISTMAS SURPRISE! 🎄
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ once: true }}
          style={{
            marginTop: "3rem",
            fontSize: "1rem",
            opacity: 0.6,
          }}
        >
          <p>Made with infinite love and devotion</p>
          <p>December 22, 2025</p>
          <p style={{ marginTop: "1rem", fontSize: "2rem" }}>✨💕🌹</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
