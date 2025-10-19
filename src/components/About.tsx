import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center text-center h-screen bg-white dark:bg-gray-100 transition-colors duration-500"
    >
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Hi, This is Kyle C. I am currently pursuing my Master of Computer
          Science at NC State University. I received my Bachelor of Science
          degree of Industrial Engineering and Management from National Yang
          Ming Chiao Tung Unicversity in 2024. I have experience in MERN
          Developement and Chat Bot Developement. My focus areas are Machine
          Learning, AI and Full-stack Developement.
        </p>
      </Reveal>
    </section>
  );
}
