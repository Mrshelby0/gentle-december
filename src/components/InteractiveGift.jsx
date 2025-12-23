import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useRef } from "react";

export default function InteractiveGift() {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    setShowConfetti(true);
    setShowPopup(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play();
    }
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        position: "relative",
      }}
    >
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" />

      {showConfetti && (
        <Confetti
          numberOfPieces={400}
          colors={[
            "#ff6b9d",
            "#f67280",
            "#ffa07a",
            "#ffb3ba",
            "#ffc3d5",
            "#ff85a1",
          ]}
          recycle={false}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <motion.h2
          style={{
            fontSize: "2.5rem",
            color: "white",
            fontFamily: "Playfair Display",
            marginBottom: "3rem",
            background: "linear-gradient(45deg, #ff6b9d, #ffa07a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A Special Gift Just For You
        </motion.h2>

        <div style={{ position: "relative", perspective: "1200px" }}>
          <motion.div
            onClick={handleOpen}
            animate={{
              rotateY: opened ? 180 : 0,
              scale: !opened ? [1, 1.05, 1] : 1,
            }}
            transition={{
              rotateY: { duration: 0.8 },
              scale: { duration: 2, repeat: !opened ? Infinity : 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "200px",
              height: "240px",
              margin: "0 auto",
              cursor: "pointer",
              transformStyle: "preserve-3d",
            }}
          >
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.div
                  key="box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    boxShadow: "0 20px 60px rgba(255, 107, 157, 0.5)",
                    border: "3px solid rgba(255, 200, 124, 0.3)",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ fontSize: "3rem", marginBottom: "1rem" }}
                  >
                    🎁
                  </motion.div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontFamily: "Playfair Display",
                      textAlign: "center",
                    }}
                  >
                    Click to Open
                  </p>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    👇
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(240, 114, 128, 0.2))",
                    borderRadius: "15px",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid rgba(255, 107, 157, 0.5)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity },
                    }}
                    style={{
                      fontSize: "3rem",
                      marginBottom: "1rem",
                    }}
                  >
                    💎
                  </motion.div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "1.3rem",
                      fontFamily: "Playfair Display",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    You are my greatest gift
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {opened && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              marginTop: "2rem",
              color: "white",
              fontSize: "1.2rem",
              maxWidth: "500px",
              lineHeight: "1.8",
              opacity: 0.9,
            }}
          >
            Click on the gift to see your special surprise! 🍫
          </motion.p>
        )}
      </motion.div>

      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "600px",
                width: "100%",
                background: "linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(240, 114, 128, 0.2))",
                borderRadius: "30px",
                padding: "3rem",
                backdropFilter: "blur(20px)",
                border: "3px solid rgba(255, 107, 157, 0.5)",
                textAlign: "center",
                position: "relative",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: "5rem", marginBottom: "2rem" }}
              >
                🍫
              </motion.div>

              <h3
                style={{
                  color: "#ff6b9d",
                  fontFamily: "Playfair Display",
                  fontSize: "2.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                You Win a Chocolate! 🎉
              </h3>

              <p
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                I can't give you a real gift because you don't like it, but I can give you a chocolate!
              </p>

              <motion.button
                onClick={() => setShowPopup(false)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontWeight: "600",
                  boxShadow: "0 10px 30px rgba(255, 107, 157, 0.5)",
                }}
              >
                Yay! Thank You! 💕
              </motion.button>

              <motion.div
                onClick={() => setShowPopup(false)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: "white",
                  opacity: 0.7,
                }}
              >
                ✕
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
