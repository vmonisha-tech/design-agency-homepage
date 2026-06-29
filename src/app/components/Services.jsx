import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide creative and technology-driven solutions to help businesses
          establish a strong digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}