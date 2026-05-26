import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-10">

      {/* LEFT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={profile}
          alt="profile"
          className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_50px_cyan]"
        />
      </div>

      {/* RIGHT SIDE TEXT */}
      <div className="w-full md:w-1/2 space-y-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-cyan-400">Robert Mmasi</span>
        </h1>

        <h2 className="text-3xl text-cyan-300 font-semibold">
          Full Stack Developer
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-xl">
          I am a passionate full-stack developer who builds modern web applications
          using React, Node.js, Express, and MongoDB. I love clean UI and scalable backend systems.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
        >
          Hire Me
        </button>

      </div>

    </section>
  );
}