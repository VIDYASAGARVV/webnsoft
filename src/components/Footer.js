import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1c36] text-white py-10">
      <div className="max-w-9xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:justify-center gap-4">
        {/* Column 1 */}
        <div className="">
          <h3 className="text-xl font-bold text-orange-500 mb-2">
            WebNSoftware
          </h3>
          <div className="flex justify-center">
            <div className="w-12 h-[2px] bg-blue-500 mb-4"></div>
          </div>

          <p className="text-gray-300 mb-4">
            Helping businesses grow through innovative digital solutions since
            2023.
          </p>

          {/* Social Icons with Hover Up Effect */}
          <div className="flex gap-3 ml-12">
            {[
              { icon: <FaFacebookF /> },
              { icon: <FaInstagram /> },
              { icon: <FaLinkedinIn /> },
              { icon: <FaTwitter /> },
              { icon: <FaYoutube /> },
            ].map((item, index) => (
              <a
                key={index}
                href="/"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="">
          <h3 className="group text-xl font-bold text-orange-500 mb-2 relative inline-block">
            Services
            <span className="block h-[2px] bg-blue-500 absolute bottom-0 left-0 w-0 "></span>
          </h3>
          <ul className="space-y-2 text-gray-300 ml-2">
            <li>Social Media Management</li>
            <li>Website Development</li>
            <li>E-commerce Solutions</li>
            <li>Digital Marketing</li>
            <li>SEO Services</li>
            <li>Content Creation</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="">
          <h3 className="group text-xl font-bold text-orange-500 mb-2 relative inline-block">
            Quick Links
            <span className="block h-[2px] bg-blue-500 absolute bottom-0 left-0 w-0 "></span>
          </h3>
          <ul className="space-y-2 text-gray-300 ml-2">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className=" ">
          <h3 className="group text-xl font-bold text-orange-500 mb-2 relative inline-block">
            Contact Us
            <span className="block h-[2px] bg-blue-500 absolute bottom-0 left-0 w-0 "></span>
          </h3>
          <ul className="space-y-2 text-gray-300 ml-12">
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> 7569100563
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> info@webnsoftware.com
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe /> www.webnsoftware.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt /> Hyderabad, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
         © 2023 - {new Date().getFullYear()} WebNSoftware. All Rights Reserved.

      </div>
    </footer>
  );
};

export default Footer;
