import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [treeGlowing, setTreeGlowing] = useState(false);
  const [showSanta, setShowSanta] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "🎄 Merry Christmas! 🎄\n\nSanta came all the way with his reindeer just for you!\nYou deserve all the magic, joy, and love this season brings.\n\nYou are my greatest gift. 💝",
    "✨ Every moment with you is a gift ✨\n\nYou light up my world brighter than any Christmas tree.\nYour smile is the only decoration I need.\n\nForever grateful for you. 🎁",
    "🎅 Ho Ho Ho! 🎅\n\nSanta says you've been amazing this year!\nYou deserve all the happiness in the world.\n\nYou make every day feel like Christmas. 💖",
    "⭐ You're my Christmas miracle ⭐\n\nIn a world full of ordinary,\nyou're my extraordinary.\n\nThank you for being you. 🌟"
  ];

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

  const handleTreeClick = () => {
    setTreeGlowing(true);
    setShowSanta(true);
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

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
      {[...Array(20)].map((_, i) => (
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
{/* Timer and Tree Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Interactive Christmas Tree */}
        <motion.div
          onClick={handleTreeClick}
          whileHover={{ scale: 1.05 }}
          style={{
            position: "relative",
            cursor: "pointer",
            fontSize: "12rem",
          }}
        >
          <motion.div
            animate={
              treeGlowing
                ? {
                    textShadow: [
                      "0 0 20px #00ff00, 0 0 40px #ff0000, 0 0 60px #ffff00",
                      "0 0 40px #ff0000, 0 0 60px #ffff00, 0 0 80px #00ff00",
                      "0 0 60px #ffff00, 0 0 80px #00ff00, 0 0 100px #ff0000",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: treeGlowing ? Infinity : 0,
            }}
          >
            🎄
          </motion.div>

          {treeGlowing && (
            <>
              {/* Glowing ornaments */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 1, 0.8],
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  style={{
                    position: "absolute",
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    fontSize: "2.5rem",
                  }}
                >
                  {["🔴", "🟡", "🔵", "🟢", "⭐", "✨"][Math.floor(Math.random() * 6)]}
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </div>

      {/* Santa with Reindeer */}
      <AnimatePresence>
        {showSanta && (
          <motion.div
            initial={{ x: -2000, y: -200, opacity: 0 }}
            animate={{ 
              x: [null, 0, 2000],
              y: [null, -100, -200],
              opacity: [0, 1, 0]
            }}
            exit={{ x: 2000, opacity: 0 }}
            transition={{ 
              duration: 8,
              times: [0, 0.3, 1],
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{
              position: "fixed",
              top: "15%",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              pointerEvents: "none",
            }}
          >
            {/* Reindeer */}
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ fontSize: "5rem" }}
            >
              🦌
            </motion.div>
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
              style={{ fontSize: "5rem" }}
            >
              🦌
            </motion.div>

            {/* Sleigh and Santa */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ 
                fontSize: "7rem",
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))"
              }}
            >
              🛷
            </motion.div>

            <motion.div
              animate={{ 
                rotate: [-5, 5, -5],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 0.6, repeat: Infinity }}
              style={{ 
                fontSize: "6rem",
                filter: "drop-shadow(0 0 20px rgba(255, 0, 0, 0.8))"
              }}
            >
              🎅
            </motion.div>

            {/* Gifts */}
            <motion.div
              style={{
                display: "flex",
                gap: "0.5rem",
                fontSize: "3rem",
              }}
            >
              {["🎁", "🎁", "🎁"].map((gift, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {gift}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beautiful Message */}
      <AnimatePresence mode="wait">
        {showSanta && (
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "relative",
              zIndex: 10,
              marginTop: "4rem",
              background: "linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(240, 114, 128, 0.2))",
              padding: "2rem 3rem",
              borderRadius: "20px",
              border: "2px solid rgba(255, 107, 157, 0.4)",
              backdropFilter: "blur(10px)",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            <motion.p
              style={{
                color: "white",
                fontSize: "1.4rem",
                fontFamily: "Playfair Display",
                lineHeight: "1.8",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {quotes[quoteIndex]}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

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
        {!treeGlowing ? "Click on the Christmas tree! 🎄✨" : "Every second is a moment closer to sharing this with you 💕"}
      </motion.p>
    </section>
  );
}
