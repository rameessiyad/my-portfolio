import Hero from "./components/hero";
import Services from "./components/services";
import SkillsSection from "./components/skills";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Education from "./components/education";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}
