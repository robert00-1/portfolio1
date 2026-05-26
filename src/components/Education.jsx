export default function Education() {
  return (
    <section id="education" className="px-10 md:px-20 py-20">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Education
      </h1>

      <div className="space-y-6">

        {/* Education 1 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">
            Certificate in Software Engineering – Moringa School
          </h2>

          <p className="text-gray-300 mt-4">
            Studied programming, web development, databases,
            networking, and software engineering fundamentals.
          </p>
        </div>

        {/* Education 2 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold">
            Bachelor of Science (BSc) – University of Eldoret
          </h2>

          <p className="text-gray-300 mt-4">
            Studied computer science concepts, software development,
            systems design, and problem solving skills.
          </p>
        </div>

      </div>

    </section>
  );
}