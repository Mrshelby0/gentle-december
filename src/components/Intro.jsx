import { motion } from "framer-motion";

export default function Intro() {
  const isChristmas =
    new Date().getDate() === 25 && new Date().getMonth() === 11;

  return (
    <section style={{ background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        style={{ textAlign: "center", position: "relative", zIndex: 10 }}
      >
        {isChristmas && (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            style={{ marginTop: "1rem", opacity: 0.6, fontSize: "1.2rem" }}
          >
            🎄 Merry Christmas 🎄
          </motion.p>
        )}

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: "Playfair Display",
            fontSize: "3.5rem",
            background: "linear-gradient(45deg, #c06c84, #f67280)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
          }}
        >
          For My Devi Ji 💕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1.5 }}
          style={{ fontSize: "1.3rem", marginTop: "1rem" }}
        >
          This is not just a surprise...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          style={{
            fontSize: "1.5rem",
            marginTop: "0.5rem",
            fontFamily: "Playfair Display",
            fontWeight: "500",
          }}
        >
          It's a moment crafted just for you.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          style={{ marginTop: "2rem", fontSize: "2rem" }}
        >
          ❤️
        </motion.div>
      </motion.div>
    </section>
  );
}
