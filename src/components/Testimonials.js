import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";


const testimonials = [
  {
    text: `WebNSoftware transformed our social media presence completely. Our engagement has increased by 300% since we started working with them. Highly recommended!`,
    name: "Priya Sharma",
    role: "Fashion Boutique Owner",
    image: "images/testi1.jpg",
  },
  {
    text: `Our new website from WebNSoftware has helped us attract more customers than ever before. The team was professional and delivered exactly what we needed.`,
    name: "Rahul Patel",
    role: "Restaurant Owner",
    image: "images/testi2.jpg",
  },
  {
    text: `The e-commerce website they built for us has doubled our online sales in just three months. Their ongoing support has been exceptional.`,
    name: "Anjali Mehta",
    role: "Handicrafts Business",
        image: "images/testi3.jpg",

  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f9ff] py-16 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          What Our Clients Say
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto my-4 rounded-full"></div>
        <p className="text-gray-600 mb-12">
          Hear from businesses that have grown with our digital solutions
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 relative"
            >
              <p className="text-gray-600 italic mb-6 relative z-10">
                "{t.text}"
              </p>
              <FaQuoteRight className="absolute top-6 right-6 text-gray-200 text-4xl" />
              <div className="flex items-center mt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
