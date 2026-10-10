
import bnb from "../assets/bnb.jpg";
import sms from "../assets/sms.jpg";
import dictionary from "../assets/dictionary.jpg";
import pos from "../assets/pos.jpg";

export default function Projects() {
  return (
    <section id="projects" className="px-10 md:px-20 py-20">

      <h1 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h1>

      <div className="space-y-12">

        {/* ===================== ROBERTRIDE ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <div className="w-full h-72 bg-gray-800 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-cyan-400">
              RobertRide 🚗
            </h2>
          </div>

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              RobertRide Ride-Hailing System
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A full-stack ride-hailing platform that allows passengers
              to request rides, estimate fares, track drivers on a live map,
              and make payments through M-Pesa. The system includes secure
              JWT authentication, driver management, GPS tracking, route
              navigation, ride status management, and M-Pesa STK Push
              integration.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                React
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Flask
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                PostgreSQL
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                JWT
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Leaflet
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                M-Pesa
              </span>
            </div>

            <a
              href="https://robertride-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Live Project
            </a>

          </div>
        </div>


        {/* ===================== LOAN APP ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <div className="w-full h-72 bg-gray-800 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-cyan-400 text-center px-4">
              Loan Management 💰
            </h2>
          </div>

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              Loan Management System
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A full-stack loan management platform that allows users to
              register, log in securely, apply for loans, manage repayments,
              and track their loan information. The system uses JWT
              authentication, FastAPI, PostgreSQL, and a structured backend
              API for managing users, loans, installments, and repayments.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                React
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                FastAPI
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                PostgreSQL
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                SQLAlchemy
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                JWT
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Render
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Vercel
              </span>

            </div>

            <a
              href="https://loan-app-zeta-bice.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Live Project
            </a>

          </div>
        </div>


        {/* ===================== TATTOO & MASSAGE BOOKING PLATFORM ===================== */}
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

          <div className="w-full h-72 bg-gray-800 flex items-center justify-center">
            <h2 className="text-5xl font-bold text-cyan-400 text-center px-4">
              Tattoo & Massage 💆‍♂️
            </h2>
          </div>

          <div className="p-8">

            <h2 className="text-3xl font-bold mb-4">
              Tattoo & Massage Booking Platform
            </h2>

            <p className="text-gray-300 mb-6 leading-7">
              A full-stack booking platform for tattoo and massage services.
              Customers can browse available services, create accounts,
              make bookings, manage payments, and track their booking status.
              The platform includes secure JWT authentication, PostgreSQL
              database integration, Prisma ORM, payment processing, service
              availability management, reviews, wallet functionality, and
              cryptocurrency payment support.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                React
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Node.js
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Express
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                PostgreSQL
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Prisma
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                JWT
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Stripe
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Render
              </span>

              <span className="bg-gray-800 text-cyan-400 px-3 py-1 rounded-full">
                Vercel
              </span>

            </div>

            <a
              href="https://tattoo-shop-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Live Project
            </a>

          </div>
        </div>


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
  href="https://supermarket-pos-system-self.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
>
  View Live Project
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

