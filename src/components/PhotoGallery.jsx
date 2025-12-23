import { motion, AnimatePresence, useMotionValue, useAnimationControls } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Import images and videos from src/assets/deviji
import photo1 from "../assets/deviji/1.jpeg";
import video1 from "../assets/deviji/1.mp4";
import photo2 from "../assets/deviji/2.jpeg";
import video2 from "../assets/deviji/2.mp4";
import photo3 from "../assets/deviji/3.jpeg";
import video3 from "../assets/deviji/3.mp4";
import photo4 from "../assets/deviji/4.jpeg";
import video4 from "../assets/deviji/4.mp4";
import photo5 from "../assets/deviji/5.jpeg";
import video5 from "../assets/deviji/5.mp4";
import photo6 from "../assets/deviji/6.jpeg";
import video6 from "../assets/deviji/6.mp4";
import photo7 from "../assets/deviji/7.jpeg";
import photo8 from "../assets/deviji/8.jpeg";
import photo9 from "../assets/deviji/9.jpeg";
import photo10 from "../assets/deviji/10.jpeg";

export default function PhotoGallery({ audioRef }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(-1); // -1 for left, 1 for right

  useEffect(() => {
    if (!isDragging && hoveredIndex === null) {
      // Continue scrolling in the current direction
      const startX = x.get();
      const targetX = scrollDirection === -1 ? startX - 1800 : startX + 1800;
      
      controls.start({
        x: targetX,
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      });
    } else {
      controls.stop();
    }
  }, [isDragging, hoveredIndex, scrollDirection, controls, x]);

  // Gallery with images and videos (alternating: video, photo, video, photo...)
  const gallery = [
    {
      id: 1,
      type: "video",
      src: video1,
      message: "Your Radiance",
      quote: "You have this rare kind of beauty that makes the world pause."
    },
    {
      id: 2,
      type: "image",
      src: photo1,
      message: "Pure Elegance",
      quote: "There's something about you that's effortlessly captivating."
    },
    {
      id: 3,
      type: "video",
      src: video2,
      message: "Your Grace",
      quote: "The way you carry yourself speaks volumes without saying a word."
    },
    {
      id: 4,
      type: "image",
      src: photo2,
      message: "Absolutely Stunning",
      quote: "Your smile could light up the darkest corners of this world."
    },
    {
      id: 5,
      type: "video",
      src: video3,
      message: "Your Presence",
      quote: "You walk into a room and everything just feels... better."
    },
    {
      id: 6,
      type: "image",
      src: photo3,
      message: "Breathtaking",
      quote: "Some people are just naturally beautiful, and you're one of them."
    },
    {
      id: 7,
      type: "video",
      src: video4,
      message: "Your Spirit",
      quote: "Your beauty isn't just what you see, it's who you are inside."
    },
    {
      id: 8,
      type: "image",
      src: photo4,
      message: "Mesmerizing",
      quote: "You have this quiet confidence that's incredibly attractive."
    },
    {
      id: 9,
      type: "video",
      src: video5,
      message: "Simply Beautiful",
      quote: "You don't even try, and that's what makes you extraordinary."
    },
    {
      id: 10,
      type: "image",
      src: photo5,
      message: "Your Aura",
      quote: "There's a warmth about you that draws people in naturally."
    },
    {
      id: 11,
      type: "video",
      src: video6,
      message: "Remarkable",
      quote: "You're the kind of person people remember long after they meet you."
    },
    {
      id: 12,
      type: "image",
      src: photo6,
      message: "Captivating Soul",
      quote: "Your kindness and beauty create something truly rare."
    },
    {
      id: 13,
      type: "image",
      src: photo7,
      message: "Unforgettable",
      quote: "Everything about you leaves a lasting impression."
    },
    {
      id: 14,
      type: "image",
      src: photo8,
      message: "Your Essence",
      quote: "You're beautiful in ways that go beyond what eyes can see."
    },
    {
      id: 15,
      type: "image",
      src: photo9,
      message: "Absolutely Incredible",
      quote: "You have a way of making ordinary moments feel special."
    },
    {
      id: 16,
      type: "image",
      src: photo10,
      message: "Pure Admiration",
      quote: "I appreciate everything you are, inside and out."
    },
  ];

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    // Pause background music when opening a video
    if (audioRef && audioRef.current && media.type === "video") {
      try {
        audioRef.current.pause();
      } catch {}
    }
  };

  const closeSelected = () => {
    // Resume background music from the same position if a video was open
    if (audioRef && audioRef.current && selectedMedia && selectedMedia.type === "video") {
      audioRef.current.play().catch(() => {});
    }
    setSelectedMedia(null);
  };

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
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontFamily: "Playfair Display",
          fontSize: "3.5rem",
          background: "linear-gradient(to right, #ff6b9d, #f07280)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        Our Beautiful Gallery
      </motion.h2>

      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          height: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          animate={controls}
          onDragStart={() => {
            setIsDragging(true);
            controls.stop();
          }}
          onDrag={(e, info) => {
            // Update scroll direction based on drag velocity
            if (info.velocity.x > 100) {
              setScrollDirection(1); // dragging right, scroll right
            } else if (info.velocity.x < -100) {
              setScrollDirection(-1); // dragging left, scroll left
            }
          }}
          onDragEnd={(e, info) => {
            setIsDragging(false);
            // Set direction based on final drag direction
            if (info.offset.x > 50) {
              setScrollDirection(1); // scroll right
            } else if (info.offset.x < -50) {
              setScrollDirection(-1); // scroll left
            }
          }}
          style={{
            display: "flex",
            gap: "2rem",
            cursor: isDragging ? "grabbing" : "grab",
            x,
          }}
        >
          {/* Create multiple copies for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div
              key={setIndex}
              style={{
                display: "flex",
                gap: "2rem",
                minWidth: "fit-content",
              }}
            >
              {gallery.map((media, index) => (
                <motion.div
                  key={`${setIndex}-${media.id}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleMediaClick(media)}
                  style={{
                    minWidth: "280px",
                    height: "400px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 20px 60px rgba(255, 107, 157, 0.3)",
                    border: "3px solid rgba(255, 107, 157, 0.3)",
                    position: "relative",
                  }}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt={media.message}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el;
                      }}
                      src={media.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      padding: "1.5rem",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {media.message}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSelected}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              padding: "2rem",
              flexDirection: "column",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "800px",
                width: "100%",
                background: "linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(240, 114, 128, 0.1))",
                borderRadius: "30px",
                padding: "2rem",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255, 107, 157, 0.3)",
              }}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.message}
                  style={{
                    width: "100%",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: "20px",
                    marginBottom: "2rem",
                  }}
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  autoPlay
                  loop
                  controls
                  playsInline
                  style={{
                    width: "100%",
                    maxHeight: "60vh",
                    objectFit: "contain",
                    borderRadius: "20px",
                    marginBottom: "2rem",
                  }}
                />
              )}
              
              <h3
                style={{
                  color: "#ff6b9d",
                  fontFamily: "Playfair Display",
                  fontSize: "2rem",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                {selectedMedia.message}
              </h3>
              
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  fontStyle: "italic",
                  opacity: 0.9,
                }}
              >
                "{selectedMedia.quote}"
              </p>
            </motion.div>

            <motion.button
              onClick={closeSelected}
              whileHover={{ scale: 1.1, rotate: 90 }}
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                background: "rgba(255, 107, 157, 0.8)",
                border: "none",
                color: "white",
                fontSize: "2rem",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          marginTop: "3rem",
          color: "white",
          fontSize: "1.1rem",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Hover to pause • Click on any photo or video to see the special message 💕
      </motion.p>
    </section>
  );
}
