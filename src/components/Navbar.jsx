import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

      <h1 className="text-3xl font-bold text-cyan-400">
        Robert Mmasi
      </h1>

      <div className="flex gap-8 text-lg">

        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/education" className="hover:text-cyan-400">Education</Link>
        <Link to="/skills" className="hover:text-cyan-400">Skills</Link>
        <Link to="/projects" className="hover:text-cyan-400">Projects</Link>
        <Link to="/services" className="hover:text-cyan-400">Services</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>

      </div>

    </nav>
  );
}