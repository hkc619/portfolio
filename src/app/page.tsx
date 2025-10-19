import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="text-gray-900 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <section id="hero" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-start">
        <About />
      </section>
      <section id="experience" className="h-screen snap-start">
        <Experience />
      </section>
      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
    </main>
  );
}
