import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-gray-900 dark:text-gray-100 min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <section id="hero" className="h-screen snap-start scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-start scroll-mt-16">
        <About />
      </section>
      <section id="experience" className="h-screen snap-start scroll-mt-16">
        <Experience />
      </section>
      <section id="projects" className="snap-start scroll-mt-16">
        <Projects />
      </section>

            <section id="footer" className="snap-start scroll-mt-16">
        <Footer />
      </section>
    </main>
  );
}
