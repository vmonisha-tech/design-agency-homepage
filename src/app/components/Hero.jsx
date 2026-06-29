export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-lg font-medium mb-2 uppercase tracking-widest">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Design<span className="text-yellow-300">Studio</span>
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            We craft modern websites, beautiful user interfaces, and impactful
            digital experiences that help businesses grow online.
          </p>

          <a
            href="#portfolio"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            View Our Work
          </a>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose Us?
            </h2>

            <ul className="space-y-3 text-gray-100">
              <li>✔ Modern UI/UX Design</li>
              <li>✔ Responsive Websites</li>
              <li>✔ Fast Performance</li>
              <li>✔ Clean & Maintainable Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}