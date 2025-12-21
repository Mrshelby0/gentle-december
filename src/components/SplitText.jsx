import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";

export default function SplitText() {
  const { scrollY } = useViewportScroll();
  const yRange = [0, 1000];
  const yPercent = useTransform(scrollY, yRange, [0, 100]);

  const textVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: (i) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: "easeOut",
      },
    }),
  };

  const words = [
    "You are light in my darkest moments",
    "You are the reason for my smile",
    "You are home in every heartbeat",
    "You are my forever, my always",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0f3460 0%, #1a1a2e 100%)",
        minHeight: "200vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 2rem",
        perspective: "1000px",
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          style={{
            perspective: "1200px",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <motion.h2
            style={{
              fontSize: "3.5rem",
              color: "white",
              fontFamily: "Playfair Display",
              margin: 0,
              perspective: "1200px",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {word.split(" ").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                custom={charIndex}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "inline-block",
                  marginRight: "0.3em",
                  background: `linear-gradient(135deg, hsl(${wordIndex * 45}, 100%, 60%}), hsl(${
                    wordIndex * 45 + 60
                  }, 100%, 70%))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      ))}

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: "4rem",
          textAlign: "center",
          fontSize: "4rem",
        }}
      >
        ✨💕✨
      </motion.div>
    </section>
  );
}
