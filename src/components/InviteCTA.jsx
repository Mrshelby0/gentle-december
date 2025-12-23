import { motion } from "framer-motion";

export default function InviteCTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
        minHeight: "70vh",
        padding: "4rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "2.5rem",
          maxWidth: "640px",
          width: "100%",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          🎄
        </motion.div>

        <h3
          style={{
            fontFamily: "Playfair Display",
            fontSize: "2.2rem",
            color: "white",
            marginBottom: "0.8rem",
          }}
        >
          So... What Now?
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1.8rem",
            lineHeight: "1.6",
          }}
        >
          I made this because I genuinely want to do something for you, a gift that lasts long and want to do something different. Something that shows I care.
          <br /><br />
          Let's see where this goes. Together. 💕
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            style={{
              padding: "1rem 2rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(255,107,157,0.4)",
            }}
          >
            Let's plan it
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            style={{
              padding: "1rem 2rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              background: "transparent",
            }}
          >
            Text me your pick
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
