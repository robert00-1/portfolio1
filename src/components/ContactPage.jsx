import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-10 md:px-20 py-20 flex flex-col md:flex-row gap-10">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 space-y-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#800000]">
          Contact Me
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg">
          To get in touch with me, use the following information below.
          I am always open to new opportunities and collaborations.
        </p>

        {/* Contact Info */}
        <p>📍 Address: Kimumu, Eldoret, Kenya</p>
        <p>📞 Phone: +254 790932050</p>
        <p>📧 Email: mmasirobert03@gmail.com</p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/254790932050"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-400 transition w-fit"
        >
          <FaWhatsapp className="text-2xl" />
          Chat on WhatsApp
        </a>

      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 bg-gray-900 p-8 rounded-2xl space-y-4">

        <h2 className="text-2xl font-bold mb-4">
          Send Message
        </h2>

        <input
          placeholder="Full Name"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded bg-black border border-gray-700"
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-3 h-32 rounded bg-black border border-gray-700"
        />

        <button className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-300 transition">
          Send Message
        </button>

      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/254790932050"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-400 transition"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

    </div>
  );
}