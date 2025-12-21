import { motion } from "framer-motion";
import { useState } from "react";

export default function QuizGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "What's your favorite thing I do?",
      options: ["Make you laugh", "Listen to you", "Make it awkward", "All of the above"],
      correct: 2,
      hint: "Be honest 😅",
    },
    {
      question: "How do I make you feel?",
      options: ["Annoyed", "Comfortable", "Confused", "Seen"],
      correct: 2,
      hint: "No judgment, just curious!",
    },
    {
      question: "What was your first impression of me?",
      options: ["Weird guy in gym", "Interesting", "Cute but shy", "TBD"],
      correct: 3,
      hint: "There's no wrong answer here!",
    },
    {
      question: "Would you say we have chemistry?",
      options: ["Maybe", "Definitely", "Still figuring it out", "You tell me"],
      correct: 3,
      hint: "This one's for real though 👀",
    },
  ];

  const handleAnswerClick = (idx) => {
    if (idx === questions[currentQ].correct) {
      setScore(score + 1);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
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
        How Well Do I Know You? 🤔
      </motion.h2>

      {!showScore ? (
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              color: "white",
              fontSize: "1.8rem",
              marginBottom: "2rem",
              textAlign: "center",
              fontFamily: "Playfair Display",
            }}
          >
            {questions[currentQ].question}
          </motion.h3>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {questions[currentQ].options.map((option, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswerClick(idx)}
                style={{
                  padding: "1.2rem",
                  background: "linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(240, 114, 128, 0.1))",
                  border: "2px solid rgba(255, 107, 157, 0.3)",
                  color: "white",
                  fontSize: "1.1rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              color: "rgba(255, 107, 157, 0.7)",
              fontSize: "0.9rem",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            💡 {questions[currentQ].hint}
          </motion.p>

          <motion.div
            style={{
              marginTop: "2rem",
              color: "white",
              opacity: 0.6,
              textAlign: "center",
            }}
          >
            Question {currentQ + 1} / {questions.length}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: "4rem",
              marginBottom: "2rem",
            }}
          >
            🎉
          </motion.div>

          <h3
            style={{
              color: "white",
              fontSize: "2.5rem",
              fontFamily: "Playfair Display",
              marginBottom: "1rem",
            }}
          >
            Amazing!
          </h3>

          <p
            style={{
              color: "white",
              fontSize: "1.3rem",
              marginBottom: "1rem",
              opacity: 0.9,
            }}
          >
            You got {score} out of {questions.length} correct!
          </p>

          <p
            style={{
              color: "white",
              opacity: 0.7,
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            {score === 4 && "Okay, you really do get me. That's cool. 😊"}
            {score === 3 && "Pretty close! We're definitely on the same page. 👀"}
            {score === 2 && "We're still getting to know each other. That's the fun part! 😄"}
            {score <= 1 && "No worries, we have time to figure this out. 💭"}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowScore(false);
            }}
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              background: "linear-gradient(135deg, #ff6b9d 0%, #f67280 100%)",
              border: "none",
              color: "white",
              fontSize: "1rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Try Again
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
