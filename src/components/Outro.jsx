import { motion } from "framer-motion";

export default function Outro() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ fontSize: "4rem", marginBottom: "2rem" }}
        >
          💝
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "Playfair Display",
            fontSize: "2.5rem",
            color: "#c06c84",
            marginBottom: "1.5rem",
          }}
        >
          Forever Yours
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 2 }}
          viewport={{ once: true }}
          style={{ fontSize: "1.2rem", fontStyle: "italic" }}
        >
          This moment is eternal, just like my love for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 2 }}
          viewport={{ once: true }}
          style={{
            marginTop: "2rem",
            fontSize: "0.9rem",
            opacity: 0.6,
          }}
        >
          <p>Made with infinite love for my Devi ji 💕</p>
          <p style={{ marginTop: "0.5rem" }}>December 2025</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
