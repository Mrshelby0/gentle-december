import { useState } from "react";
import { motion } from "framer-motion";

export default function MusicControl({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      onClick={toggleMusic}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "rgba(255, 255, 255, 0.9)",
        border: "2px solid #c06c84",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        boxShadow: "0 4px 15px rgba(192, 108, 132, 0.3)",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
      whileHover={{ scale: 1.1, boxShadow: "0 6px 20px rgba(192, 108, 132, 0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? "🎵" : "🎶"}
    </motion.button>
  );
}
