import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import HeroSection from "./components/HeroSection";
import SplitText from "./components/SplitText";
import CardsSection from "./components/CardsSection";
import PhotoGallery from "./components/PhotoGallery";
import ChristmasCountdown from "./components/ChristmasCountdown";
import LoveMessages from "./components/LoveMessages";
import QuizGame from "./components/QuizGame";
import ThisOrThat from "./components/ThisOrThat";
import InviteCTA from "./components/InviteCTA";
import InteractiveGift from "./components/InteractiveGift";
import VictorySection from "./components/VictorySection";
import FloatingHearts from "./components/FloatingHearts";

function App() {
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

  return (
    <>
      <FloatingHearts />
      <HeroSection />
      <SplitText />
      <CardsSection />
      <ChristmasCountdown />
      <PhotoGallery />
      <LoveMessages />
      <QuizGame />
      <ThisOrThat />
      <InviteCTA />
      <InteractiveGift />
      <VictorySection />
    </>
  );
}

export default App;
