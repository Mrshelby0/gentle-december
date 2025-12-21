import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25);

      if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      const diff = christmas - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <motion.div
        key={value}
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
          boxShadow: "0 10px 30px rgba(255, 107, 157, 0.4)",
        }}
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <p style={{ color: "white", fontSize: "0.9rem", opacity: 0.7 }}>
        {label}
      </p>
    </motion.div>
  );

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated snowflakes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, window.innerHeight],
            x: [0, Math.sin(i) * 200],
            opacity: [1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            position: "fixed",
            left: Math.random() * window.innerWidth,
            top: -50,
            fontSize: "2rem",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          ❄️
        </motion.div>
      ))}

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "3rem",
          color: "white",
          fontFamily: "Playfair Display",
          marginBottom: "1rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        🎄 Christmas Countdown 🎄
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        style={{
          color: "white",
          fontSize: "1.3rem",
          marginBottom: "3rem",
          opacity: 0.8,
          position: "relative",
          zIndex: 10,
        }}
      >
        Until I give you this gift...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "2rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        viewport={{ once: true }}
        style={{
          marginTop: "3rem",
          color: "white",
          fontSize: "1.2rem",
          opacity: 0.7,
          fontStyle: "italic",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        Every second is a moment closer to sharing this with you 💕
      </motion.p>
    </section>
  );
}
