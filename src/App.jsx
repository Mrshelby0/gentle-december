import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSection from "./components/HeroSection";
import SplitText from "./components/SplitText";
import CardsSection from "./components/CardsSection";
import PhotoGallery from "./components/PhotoGallery";
import ChristmasCountdown from "./components/ChristmasCountdown";
import LoveMessages from "./components/LoveMessages";
import QuizGame from "./components/QuizGame";
import InviteCTA from "./components/InviteCTA";
import InteractiveGift from "./components/InteractiveGift";
import VictorySection from "./components/VictorySection";
import FloatingHearts from "./components/FloatingHearts";
import MusicControl from "./components/MusicControl";
import bgMusic from "./assets/deviji/background song.webm";

function App() {
  const audioRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Initialize background music
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // 50% volume
      audio.loop = true;
      // Try autoplay; may be blocked until user interacts
      audio.play().catch(() => {
        // Autoplay blocked by browser; user can start via MusicControl
      });
    }
  }, []);

  return (
    <>
      {/* Hidden audio element for background music */}
      <audio ref={audioRef} src={bgMusic} preload="auto" />

      <FloatingHearts />
      <HeroSection />
      <SplitText />
      <CardsSection />
      <ChristmasCountdown />
      <PhotoGallery audioRef={audioRef} />
      <LoveMessages />
      <QuizGame />
      <InviteCTA />
      <InteractiveGift />
      <VictorySection />
      {/* Music toggle button */}
      <MusicControl audioRef={audioRef} />
    </>
  );
}

export default App;
