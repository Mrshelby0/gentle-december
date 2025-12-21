import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        textAlign: "center",
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 40px rgba(192, 108, 132, 0.2)",
        maxWidth: "400px",
        margin: "2rem auto",
      }}
    >
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.8 }}>
        How much do I love you?
      </p>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: "linear-gradient(135deg, #f67280 0%, #c06c84 100%)",
          border: "none",
          color: "white",
          fontSize: "3rem",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 5px 20px rgba(192, 108, 132, 0.4)",
        }}
      >
        ❤️
      </motion.button>
      <motion.p
        key={count}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          marginTop: "1.5rem",
          fontSize: "2rem",
          fontFamily: "Playfair Display",
          color: "#c06c84",
          fontWeight: "600",
        }}
      >
        {count === 0 ? "Tap the heart!" : `${count.toLocaleString()} times!`}
      </motion.p>
      {count > 10 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginTop: "1rem",
            fontSize: "1rem",
            fontStyle: "italic",
            opacity: 0.7,
          }}
        >
          Actually, it's infinite! ♾️
        </motion.p>
      )}
    </motion.div>
  );
}
