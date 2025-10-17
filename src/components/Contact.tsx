export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-600 mb-8">
        Interested in collaboration or have a question? Let’s get in touch!
      </p>
      <a
        href="mailto:kyle@example.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Email Me
      </a>
    </section>
  );
}
