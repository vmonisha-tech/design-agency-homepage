import Image from "next/image";
import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Portfolio
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore some of our recent projects that showcase our creativity,
          technical expertise, and attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {portfolio.map((project) => (

            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}