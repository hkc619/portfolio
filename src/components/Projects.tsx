const projects = [
  {
    title: "AIoT Predictive Maintenance",
    description:
      "Built an end-to-end system analyzing IoT sensor data for equipment failure prediction.",
  },
  {
    title: "Next.js Calendar App",
    description:
      "Integrated Google Calendar API with full-stack Next.js + Tailwind + OAuth.",
  },
  {
    title: "OCR ID Masking Tool",
    description:
      "Python + OpenCV + Tesseract pipeline for document privacy automation.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              {p.title}
            </h3>
            <p className="text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
