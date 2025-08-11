import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 px-4" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">WebNSoftware</span>
          </h2>
          <p className="text-gray-600 mb-4">
            We are a team of passionate digital experts dedicated to helping
            businesses grow through innovative online solutions. With years of
            experience in the industry, we understand what it takes to create a
            powerful online presence.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to deliver high-quality digital services that are
            affordable, effective, and tailored to each client's unique needs.
            We combine creativity with technical expertise to produce results
            that drive real business growth.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're a startup looking to establish your online presence
            or an established business wanting to expand your digital reach, we
            have the solutions to help you succeed.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Work With Us
          </button>
        </div>

        {/* Right Image with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="images/about.avif"
            alt="Team working together"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

    
    </section>
  );
}
