import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import ambient from "../assets/ambient.mp4";

export default function Moment() {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setShowConfetti(true);
    audioRef.current.volume = 0;
    audioRef.current.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.25) {
        vol += 0.01;
        audioRef.current.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);

    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section
      style={{
        flexDirection: "column",
        gap: "2rem",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        position: "relative",
      }}
    >
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
          colors={["#ff6b9d", "#c06c84", "#f67280", "#ffa07a", "#ffb3ba"]}
        />
      )}
      <audio ref={audioRef} src={ambient} loop />

      {!open ? (
        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(135deg, #f67280 0%, #c06c84 100%)",
            border: "none",
            padding: "1.5rem 3rem",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: "white",
            borderRadius: "50px",
            fontFamily: "Playfair Display",
            fontWeight: "500",
            boxShadow: "0 10px 30px rgba(192, 108, 132, 0.4)",
          }}
        >
          💕 Tap when ready 💕
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={{
            textAlign: "center",
            padding: "3rem",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "30px",
            boxShadow: "0 20px 60px rgba(192, 108, 132, 0.3)",
          }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: "3rem", marginBottom: "1rem" }}
          >
            🌹
          </motion.div>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontSize: "2.5rem",
              lineHeight: "1.4",
              color: "#c06c84",
              marginBottom: "1rem",
            }}
          >
            You are my everything, Devi ji
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            style={{
              fontSize: "1.3rem",
              opacity: 0.8,
              fontStyle: "italic",
            }}
          >
            In your presence, I find peace.
            <br />
            In your smile, I find joy.
            <br />
            In your love, I find home.
          </motion.p>
        </motion.div>
      )}
    </section>
  );
}
