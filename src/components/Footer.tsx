export default function Footer() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,transparent_60%)]"
    >
      <h2 className="text-4xl font-bold text-white">Footer</h2>
      <p className="text-white mb-8">
        Interested in collaboration or have a question? Let’s get in touch!
      </p>
      <a
        href="mailto:kylechchiu@gmail.com"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
      >
        Email Me
      </a>
    </section>
  );
}