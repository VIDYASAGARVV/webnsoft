import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-16 bg-gradient-to-r from-orange-400 to-orange-500 text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <span className="absolute top-20 left-10 w-20 h-20 bg-orange-300 opacity-30 animate-float-speed rotate-12"></span>
        <span className="absolute bottom-16 left-1/3 w-24 h-24 bg-orange-300 opacity-20 rounded-full animate-float"></span>
        <span className="absolute top-1/3 right-20 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-orange-300 opacity-30 animate-float-reverse"></span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Contact us today to discuss how we can help you achieve your digital
          goals.
        </p>

        {/* Call Now Button */}
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg mb-3">
          <a href="tel:+917569100563">Call Now</a> 
        </button>

        {/* Phone Number */}
        <div className="text-2xl font-bold text-white mb-8">7569100563</div>

        {/* Social Media Icons with Shine Effect */}
        <div className="flex justify-center gap-4">
          {[
            { icon: <FaFacebookF />, bg: "bg-[#1877F2]" },
            {
              icon: <FaInstagram />,
              bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
            },
            { icon: <FaWhatsapp />, bg: "bg-green-500" },
            { icon: <FaLinkedinIn />, bg: "bg-[#0A66C2]" },
            { icon: <FaTwitter />, bg: "bg-[#1DA1F2]" },
          ].map((item, index) => (
            <a
              key={index}
              href="/"
              onClick={(e) => e.preventDefault()}
              className={`relative p-4 rounded-full text-white shadow-lg hover:scale-110 transition overflow-hidden ${item.bg}`}
            >
              {item.icon}
              {/* Shine Overlay */}
              <span className="shine absolute inset-0"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+917569100563?text=hi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        /* Mirror Shine Effect */
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(25deg);
          }
          100% {
            transform: translateX(200%) rotate(25deg);
          }
        }
        .shine {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
}
