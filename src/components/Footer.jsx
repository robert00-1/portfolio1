export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">

      <div className="text-center space-y-3">

        <h1 className="text-2xl font-bold text-cyan-400">
          Robert Mmasi
        </h1>

        <p className="text-lg">
          Web Developer
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Robert Mmasi. All rights reserved.
        </p>

      </div>

    </footer>
  );
}