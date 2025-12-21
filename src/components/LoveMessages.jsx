import { motion } from "framer-motion";
import { useState } from "react";

export default function LoveMessages() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    {
      title: "That Gym Moment",
      text: "The first time I saw you at the gym, I couldn't focus on my workout anymore. Pretty sure I did curls wrong like 10 times. Worth it though.",
    },
    {
      title: "When You Smile",
      text: "That laugh you do? The one where you scrunch your nose a little? Yeah, that gets me every single time. Stop being cute, it's unfair.",
    },
    {
      title: "Your Vibe",
      text: "You have this way of making everything feel comfortable and fun. Talking to you feels different. In a good way. A really good way.",
    },
    {
      title: "What I'm Realizing",
      text: "I'm pretty sure I like you more than I'm supposed to at this stage, but here we are. You're kind of amazing, not gonna lie.",
    },
    {
      title: "The Butterfly Things",
      text: "Yeah, those cheesy butterflies in stomach thing? Totally real. You cause them. A lot. Send help (or don't, keep being cute).",
    },
    {
      title: "December 25th",
      text: "I made this to say: thanks for taking a chance on me. Here's to seeing where this goes. No pressure, just... excited? Yeah. Excited.",
    },
  ];

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentMessage((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          fontSize: "3rem",
          color: "white",
          fontFamily: "Playfair Display",
          marginBottom: "3rem",
          background: "linear-gradient(45deg, #ff6b9d, #ffa07a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Confessions 👀
      </motion.h2>

      <motion.div
        key={currentMessage}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "700px",
          padding: "3rem",
          background: "linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(240, 114, 128, 0.1))",
          border: "2px solid rgba(255, 107, 157, 0.3)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "2rem",
            fontFamily: "Playfair Display",
            color: "#ff6b9d",
            marginBottom: "1.5rem",
          }}
        >
          {messages[currentMessage].title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "1.3rem",
            color: "white",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          {messages[currentMessage].text}
        </motion.p>
      </motion.div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "3rem",
          alignItems: "center",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevMessage}
          style={{
            background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
            border: "none",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          ← Previous
        </motion.button>

        <div
          style={{
            color: "white",
            fontSize: "1rem",
            opacity: 0.7,
          }}
        >
          {currentMessage + 1} / {messages.length}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextMessage}
          style={{
            background: "linear-gradient(135deg, #f67280 0%, #ffa07a 100%)",
            border: "none",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Next →
        </motion.button>
      </div>
    </section>
  );
}
