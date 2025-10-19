import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-b from-indigo-950 to-black text-white relative overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-5">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 justify-between space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <img src="logo.png" alt="CloudWorld Logo" className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  CloudWorld
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Empowering IT Careers, Shaping the Future through cutting-edge cloud technologies
                and professional training solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://cloudworld.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <span className="mr-2">🌐</span>
                  Visit Website
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Contact Us</h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@cloudworld.co.in"
                  className="flex items-center group hover:text-cyan-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                    <FaEnvelope className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white group-hover:text-cyan-300">info@cloudworld.co.in</p>
                  </div>
                </a>

                <a
                  href="tel:+917498539362"
                  className="flex items-center group hover:text-cyan-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-500/30 transition-colors">
                    <FaPhone className="text-2xl text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white group-hover:text-cyan-300">+91 7498539362</p>
                  </div>
                </a>

                <div className="flex items-start group hover:text-cyan-300 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <FaMapMarkerAlt className="text-2xl text-purple-400" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-cyan-300">
                    102,103 Thite Vasti,
                    <br />
                    Thite Nagar, Kharadi,
                    <br />
                    Pune, Maharashtra 411014,
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF />, label: "Facebook", bgColor: "bg-blue-600 hover:bg-blue-700" },
                  { icon: <FaTwitter />, label: "Twitter", bgColor: "bg-sky-500 hover:bg-sky-600" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn", bgColor: "bg-blue-700 hover:bg-blue-800" },
                  { icon: <FaInstagram />, label: "Instagram", bgColor: "bg-pink-600 hover:bg-pink-700" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Policy Links with Heading */}
              <div className="mt-6 space-y-2">
                <h4 className="text-lg font-semibold text-white">Policies</h4>
                <div className="flex flex-col space-y-1">
                  <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-cyan-300 transition-colors">Careers</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} CloudWorld. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-6 h-6 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </footer>
      <a
        href="https://wa.me/917498539362"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-1 right-3 z-50 transition-transform transform hover:scale-50 vibrate"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="/pngwing.com.png"
          alt="WhatsApp Chat"
          className="w-35 h-35 object-contain"
        />
      </a>


    </>
  );
};

export default Footer;
