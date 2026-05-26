import bnb from "../assets/bnb.jpg";
import sms from "../assets/sms.jpg";
import dictionary from "../assets/dictionary.jpg";
import pos from "../assets/pos.jpg"; // 👈 add your POS image

export default function Projects() {
  return (
    <section id="projects" className="px-10 md:px-20 py-20">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h1>

      <div className="space-y-12">

        {/* ===================== POS SYSTEM ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <img
            src={pos}
            alt="pos system"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              Supermarket POS System
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A full-stack Point of Sale (POS) system for supermarkets
              that manages sales, inventory, user authentication, and
              real-time transactions. Built with role-based access control,
              secure JWT authentication, and automated business workflows.
            </p>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Project
            </a>

          </div>
        </div>

        {/* ===================== BNB PROJECT ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <img
            src={bnb}
            alt="bnb project"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              BNB Booking System
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A full-featured Airbnb-style booking platform that allows users
              to browse properties, make bookings, and pay using M-Pesa.
              It includes authentication, admin dashboard, and booking management.
            </p>

            <a
              href="https://real-estate-eight-murex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Live Project
            </a>

          </div>
        </div>

        {/* ===================== STUDENT MANAGEMENT SYSTEM ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <img
            src={sms}
            alt="student management system"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              Student Management System
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A web-based system for managing student records, attendance,
              grades, and academic reports. It simplifies school administration
              with a clean dashboard and secure authentication.
            </p>

            <a
              href="https://grp-5-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Project
            </a>

          </div>
        </div>

        {/* ===================== DICTIONARY PROJECT ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <img
            src={dictionary}
            alt="dictionary app"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              Dictionary Web App
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A modern dictionary web application that allows users to search
              for word meanings, pronunciations, definitions, and examples
              using a real-time dictionary API.
            </p>

            <a
              href="https://robert-dictionary.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Live Project
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}