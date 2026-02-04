import Reveal from "@/components/motions/Reveal";
import IntroTypingOverlay from "@/components/intro/IntroTypingOverlay";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-gray-900 dark:text-gray-100 min-h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gray-50 dark:bg-gray-900">
       <IntroTypingOverlay
        lines={[
          "kyle C.:~$ whoami",
          "MCS @ NCSU · Systems / Infrastructure",
          "kylechchiu@gmail.com:~$ cd project && ls",
        ]}
      />
      <Navbar />
      <section id="hero" className="h-screen snap-start scroll-mt-16">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-start scroll-mt-16">
        <Reveal>
        <About />
        </Reveal>
      </section>
      <section id="experience" className="snap-start scroll-mt-16">
         <Reveal>
        <Experience />
        </Reveal>
      </section>
      <section id="projects" className="snap-start scroll-mt-16">
        <Reveal>
        <Projects />
        </Reveal>
      </section>

            <section id="footer" className="snap-start scroll-mt-16">
        <Footer />
      </section>
    </main>
  );
}
