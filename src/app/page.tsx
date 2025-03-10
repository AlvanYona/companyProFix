import Image from "next/image";
import Navbar from "./Navbar";
import { HeroSection } from "./HeroSection";
import Perkenalan from "./Perkenalan";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Perkenalan />
    </main>
  );
}
