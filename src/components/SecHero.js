import React from "react";

export default function SecHero() {
  const isMobile = window.innerWidth < 768; // Check screen width

  return (
    <section className="flex justify-center py-10 bg-white">
      <div className="relative w-full max-w-6xl h-[350px]  rounded-2xl overflow-hidden shadow-lg">
        
        {/* Fixed Parallax Background (disabled on mobile) */}
        <div
          className="absolute inset-0 bg-cover bg-center  "
          
          style={{
            backgroundImage:
              "url('/images/sechero.avif')",
            backgroundAttachment: isMobile ? "scroll" : "fixed",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Transform Your Online Presence
          </h1>
          <p className="max-w-2xl text-lg mb-6">
            We create stunning digital experiences that help your business
            stand out and attract more customers.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-1">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
