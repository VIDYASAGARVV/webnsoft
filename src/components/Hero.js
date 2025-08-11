import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/images/banner-hero.avif')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold leading-tight"
        >
          <ReactTyped
            strings={[
              "Grow Your Business With Our Digital Solutions",
              "Boost Sales with Stunning Websites",
              "Reach More Customers Online",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={2000}
            loop
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-200 mt-4 text-lg md:text-xl"
        >
          Professional digital services to take your business to the next level.
          From social media management to custom website development and
          e-commerce solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            // className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1">
              Our Services
            </button>
          </a>
          <a href="#contact">
            <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-100 hover:text-black px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1">
              Get Started
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
