export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Kyle 👋</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        I’m a Software Engineer. Currently pursuing my MCS at NC State
        University.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100"
        >
          About Me
        </a>
      </div>
    </section>
  );
}
