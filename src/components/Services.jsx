export default function Services() {
  return (
    <section id="services" className="px-10 md:px-20 py-20">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Web Development
          </h2>
          <p className="text-gray-300">
            Building responsive and modern websites.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Backend Development
          </h2>
          <p className="text-gray-300">
            Creating APIs and server systems.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            UI/UX Design
          </h2>
          <p className="text-gray-300">
            Designing clean user interfaces.
          </p>
        </div>

      </div>
       
{/* CV Button */}
<div className="mt-12 flex justify-center">
  <a
    href="/ROBERT%20CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
  >
    View My CV
  </a>
</div>

    </section>
  );
}