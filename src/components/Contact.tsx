export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center h-screen bg-white dark:bg-gray-100 transition-colors duration-500"
    >
      <h2 className="text-4xl font-bold text-primary">Contact</h2>
      <p className="text-gray-600 mb-8">
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
