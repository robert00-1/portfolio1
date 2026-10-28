
export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Database Design",
    "REST APIs",
    "JWT Authentication",
    "M-Pesa Daraja API",
    "Git & GitHub",
    "Postman",
    "Prisma ORM",
    "Cloudinary",
    "Vercel",
    "Render",
    "Railway",
    "Linux & Ubuntu",
  ];

  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-20"
    >
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">
        Technical Skills
      </h1>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Technologies and tools I use to build full-stack
        web applications, develop APIs, manage databases,
        integrate payments, and deploy software.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-900 border border-gray-800 p-5 rounded-xl text-center text-gray-200 font-medium transition duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
