import { useEffect, useState } from "react";
import LogoIntro from "../components/Loader/LogoIntro";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

export default function Home() {
  const [stage, setStage] = useState("intro");
  const [showNavbar, setShowNavbar] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("move"), 2500);
    const t2 = setTimeout(() => setShowNavbar(true), 3800);
    const t3 = setTimeout(() => setShowHero(true), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
      <LogoIntro stage={stage} />
      {showNavbar && <Navbar />}
      {showHero && <Hero />}
    </div>
  );
}
