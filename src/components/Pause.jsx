import { motion } from "framer-motion";

export default function Pause() {
  return (
    <section style={{ background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <motion.p
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ fontSize: "3rem" }}
        >
          💖
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "1rem",
            fontStyle: "italic",
            opacity: 0.6,
            fontSize: "1.1rem",
          }}
        >
          Take a breath. Feel this moment.
        </motion.p>
      </motion.div>
    </section>
  );
}
