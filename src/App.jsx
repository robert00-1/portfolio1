import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      <Routes>

        {/* HOME ONLY */}
        <Route path="/" element={<Home />} />

        {/* SEPARATE PAGES */}
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>

      <Footer />

    </div>
  );
}