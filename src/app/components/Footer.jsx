export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              Design<span className="text-blue-400">Studio</span>
            </h2>

            <p className="text-gray-400 mt-2 text-center md:text-left">
              Building modern digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <ul className="flex gap-6 text-gray-300">
            <li>
              <a href="#hero" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} DesignStudio. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}