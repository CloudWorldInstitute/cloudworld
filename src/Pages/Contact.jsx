import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
      {/* Contact Section */}
      <section className="bg-blue-50 mt-10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-12 rounded-3xl shadow-lg">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-gradient mb-8">Contact CloudWorld</h2>

            <div className="space-y-6 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 w-6 h-6" />
                <a href="https://cloudworld.co.in/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 font-semibold">
                  cloudworld.co.in
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 w-6 h-6" />
                <a href="mailto:info@cloudworld.co.in" className="hover:underline text-blue-600 font-semibold">
                  info@cloudworld.co.in
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-blue-600 w-6 h-6" />
                <a href="tel:+917498539362" className="hover:underline text-blue-600 font-semibold">
                  +91 7498539362
                </a>
              </p>
              <div className="flex items-start gap-3"> {/* Changed p to div */}
                <FaMapMarkerAlt className="text-blue-600 w-6 h-6 mt-1" />
                <div> {/* Wrapper for text, or you could put span and address directly here */}
                  <span className="font-semibold">Location:</span>
                  <address className="not-italic max-w-xs">
                    102,103 Thite Vasti, Thite Nagar, Kharadi Pune, Maharashtra 411014, India
                  </address>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-blue-600 hover:bg-secondary text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300 w-fit px-8">
              Get in Touch
            </button>
          </div>

          {/* Map with Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-md">
            <iframe
              title="CloudWorld Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53981.64765085622!2d73.89579724469695!3d18.54445906859046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c178c1dcea7d%3A0x8a9a66991d86c2ab!2sCloud%20World%20Institute!5e1!3m2!1sen!2sin!4v1760709877131!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="rounded-3xl"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-6 left-6 bg-blue-600 bg-opacity-90 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
              Visit Us in Pune!
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-6 md:px-12 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full bg-blue-50 bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-10">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our most common questions and find quick answers about CloudWorld.
            </p>
          </header>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                tabIndex={0}
                onClick={() => toggleFaq(index)}
                onKeyPress={(e) => e.key === 'Enter' && toggleFaq(index)}
                className={`border border-gray-300 rounded-xl p-6 bg-white shadow-sm cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-600 transition-shadow ${faq.open ? 'shadow-lg' : 'hover:shadow-md'}`}
                aria-expanded={faq.open}
                role="button"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-blue-600">{faq.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${faq.open ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {faq.open && <p className="mt-4 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>

          {/* Join Community CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-8 max-w-xl mx-auto">
              Stay updated with the latest cloud solutions and tech insights by subscribing to our newsletter or following us on social media!
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto mt-10">
              <div className="relative w-full md:flex-1 group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  
                  className="w-full p-4 rounded-xl bg-blue-50 border-2 border-blue-800 text-gray-900 placeholder:text-gray-500 font-semibold 
                focus:outline-none focus:ring-4 focus:ring-blue-300 
                transition duration-300 shadow-md 
                bg-clip-padding group-hover:shadow-lg group-hover:border-blue-400"
                />
                <span className="absolute inset-0 rounded-xl bg- p-[1px] opacity-10 group-hover:opacity-100 transition-opacity duration-300 text-green-500 pointer-events-none"></span>
              </div>

              <button
                type="submit"
                className="relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-blue-600 
              bg-white 
              shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 
              focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-600 to-emerald-500 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
