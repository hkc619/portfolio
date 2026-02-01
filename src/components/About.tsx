import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center h-screen bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_60%)]"
    >
      <Reveal>
        <h2 className="text-4xl font-bold text-primary">About Me</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="max-w-2xl mx-auto text-primary leading-relaxed">
          I’m a Master’s student in Computer Science at North Carolina State University, with a background in Industrial Engineering and Management from National Yang Ming Chiao Tung University.
          I enjoy building software systems and thinking about how different components fit together. When working on a problem, I tend to break it down systematically—clarifying requirements, understanding data flows, and reasoning about system behavior before jumping into implementation.
          Through coursework and team projects, I’ve learned the importance of clear communication and collaboration, especially when designing systems that need to be stable, maintainable, and easy to evolve over time.
          I’m currently exploring infrastructure-related engineering roles, with a growing interest in the foundations that support large-scale and reliable software systems.
        </p>
      </Reveal>
    </section>
  );
}
