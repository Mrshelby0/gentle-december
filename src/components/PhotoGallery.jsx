import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Placeholder images - user will replace with their photos
  const photos = [
    {
      id: 1,
      title: "Us Together",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Your Smile",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Memories",
      img: "https://images.unsplash.com/photo-1514888286974-6c03bf1a1dba?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Forever",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)",
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
          marginBottom: "4rem",
          background: "linear-gradient(45deg, #ff6b9d, #ffa07a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Memories ✨
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => setSelectedIndex(i)}
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={{
              cursor: "pointer",
              borderRadius: "15px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "1",
            }}
          >
            <img
              src={photo.img}
              alt={photo.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.3rem",
              }}
            >
              {photo.title}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
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
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={photos[selectedIndex].img}
              alt={photos[selectedIndex].title}
              style={{
                maxWidth: "90%",
                maxHeight: "90vh",
                borderRadius: "20px",
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              onClick={() => setSelectedIndex(null)}
              whileHover={{ scale: 1.1 }}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255, 107, 157, 0.8)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 2 }}
        viewport={{ once: true }}
        style={{
          marginTop: "3rem",
          color: "white",
          fontSize: "1.1rem",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Click on any photo to see it in full screen
      </motion.p>
    </section>
  );
}
