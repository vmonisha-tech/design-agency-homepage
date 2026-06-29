"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100"
    >
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have a project in mind? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>

      </div>
    </section>
  );
}