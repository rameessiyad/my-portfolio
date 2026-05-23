import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/services";
import SkillsSection from "./components/skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <Hero />
      <Services />
      <Experience />
      <SkillsSection />
      <ContactMe />
    </div>
  );
}
