import React, { useState } from 'react';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [faqs, setFaqs] = useState([
    { question: "What is CloudWorld?", answer: "CloudWorld provides cloud-based solutions for businesses.", open: false },
    { question: "How to contact support?", answer: "You can reach us via email or phone listed below.", open: false },
    { question: "Where are you located?", answer: "102,103 Thite Vasti, Thite Nagar, Kharadi Pune, Maharashtra 411014, India.", open: false },
    { question: "What services do you offer?", answer: "We offer cloud migration, consulting, and 24/7 support.", open: false },
    { question: "How secure is your cloud platform?", answer: "Our platform adheres to top security standards including ISO 27001.", open: false },
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => ({ ...faq, open: i === index ? !faq.open : faq.open })));
  };

  return (
    <>

    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info Column */}
        <div>
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-6">
            Contact CloudWorld
          </h2>
          
          {/* Website */}
          <p className="flex items-center mb-4 text-gray-700">
            <FaEnvelope className="text-indigo-600 mr-3" /> {/* Icon for website/email */}
            <span className="font-semibold">Website: </span>
            <a
              href="https://cloudworld.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline ml-1"
            >
              https://cloudworld.co.in/
            </a>
          </p>
          
          {/* Email & Phone */}
          <p className="flex items-center mb-4">
            <FaEnvelope className="text-indigo-600 mr-3" /> {/* Icon for email */}
            <a href="mailto:info@cloudworld.co.in" className="text-indigo-600 hover:underline">
              info@cloudworld.co.in
            </a>
          </p>
          <p className="flex items-center mb-4">
            <FaPhone className="text-indigo-600 mr-3" /> {/* Icon for phone */}
            <a href="tel:+917498539362" className="text-indigo-600 hover:underline">
              +91 7498539362
            </a>
          </p>
          
          {/* Location */}
          <p className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="text-indigo-600 mr-3" /> {/* Icon for location */}
            <span className="font-semibold">Location:</span><br />
            102,103 Thite Vasti, Thite Nagar, Kharadi Pune, Maharashtra 411014, India
          </p>
          
          {/* Call-to-Action Button */}
          <button
            className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all shadow-md"
          >
            Get in Touch
          </button>
        </div>

        {/* Image Column */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          {/* Example Image: Replace with your actual image */}
          {/* <img
            src="/contact-image.jpg" // Ensure this image is in your public folder (e.g., a map or company photo)
            alt="CloudWorld Location"
            className="w-full h-64 object-cover rounded-lg" // Responsive image styling
            // Optional inline CSS for custom styling (e.g., if you want to adjust brightness)
            // style={{ filter: 'brightness(0.9)' }} // Example: Slightly darken the image for better contrast
          /> */}
         <div className="absolute inset-0 bg-indigo-600 opacity-100">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53981.64765085622!2d73.89579724469695!3d18.54445906859046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c178c1dcea7d%3A0x8a9a66991d86c2ab!2sCloud%20World%20Institute!5e1!3m2!1sen!2sin!4v1760709877131!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          
           {/* Overlay for a modern effect */}
          <div className="absolute bottom-4 left-4 text-white font-semibold">
            Visit Us in Pune!
          </div>
        </div>
      </div>
    </section>
  


      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen py-12 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full bg-indigo-100 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-8">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">Explore our most common questions and find quick answers about CloudWorld.</p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">Get in Touch</button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">View Services</button>
            </div>
          </header>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-300 rounded-xl p-4 transition-shadow shadow hover:shadow-xl cursor-pointer bg-white`}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-700">{faq.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${faq.open ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {faq.open && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>

          {/* Additional content */}
          <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-6">Stay updated with the latest cloud solutions and tech insights by subscribing to our newsletter or following us on social media!</p>
            <form className="flex flex-col md:flex-row  justify-center gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-xl bg-indigo-100 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
