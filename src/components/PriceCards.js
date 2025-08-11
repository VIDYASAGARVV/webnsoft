import React from "react";

export default function PriceCards() {
  const services = [
    {
      title: "Social Media Management",
      features: [
        "8 posters + 2 reels per month",
        "Content Planning & Strategy",
        "Professional Content Designing",
        "Facebook & Instagram Management",
        "Brand Awareness Campaigns",
        "Lead Generation",
        "Boost Your Sales",
      ],
      price: "₹2,999/- PER MONTH",
      img: "/images/pricecard-1.avif", // replace with actual image
    },
    {
      title: "Website Development",
      features: [
        "Static Websites",
        "Dynamic Websites",
        "Domain & Hosting Setup",
        "SEO Friendly Structure",
        "One Year Free Maintenance",
        "Mobile Responsive Design",
        "Fast Loading Speed",
      ],
      price: "Starting from ₹4,999/-",
      img: "/images/pricecard-2.avif",
    },
    {
      title: "E-commerce Website",
      features: [
        "Complete Online Store Setup",
        "Domain & Hosting Included",
        "SEO Optimized",
        "One Year Free Service",
        "Payment Gateway Integration",
        "Product Management System",
        "Order Tracking",
      ],
      price: "Starting from ₹24,999/-",
      img: "/images/pricecard-3.avif",
    },
  ];

  return (
    <section className="py-16 bg-[#f4f7ff]" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600">What We Provide</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto my-3 rounded"></div>
        <p className="text-gray-600">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.img})` }}
            ></div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✔</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-orange-500 font-bold mb-4">{service.price}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
