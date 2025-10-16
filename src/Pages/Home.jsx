import React from "react";
import { FaCloud, FaRocket, FaTools, FaLaptop, FaUserTie, FaUserMd } from 'react-icons/fa'; // Font Awesome icons
import TypewriterText from "../components/TypewriterText";
import OurJourney from "../components/OurJourney";
import CoursesComponent from "../components/CoursesComponent";
import TestComponent from "../components/TestComponent";

const Home = () => {
  return (
    <div className="">

      <section
        id="home"
        className="relative min-h-screen pt-5 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-100"
        aria-labelledby="hero-title"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0  opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-3/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
          <div className="animate-fade-in-up animation-delay-200">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              India's Leading Cloud Training Platform
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
            >
              <TypewriterText
                texts={[
                  "Welcome to Cloud World Institute",
                  "We are Turning Aspirations into IT Careers."
                ]}
                speed={50}
                delay={1000}
              />
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
              India's leading platform for mastering <span className="font-semibold text-blue-600">Cloud Computing, AWS, Azure, and DevOps</span>.
              We don't just teach — we transform beginners into industry-ready professionals with <span className="font-semibold text-green-600">100% placement support</span> and real-world training.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
              <button
                className="group bg-gradient-to-r from-indigo-600 to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                aria-label="Start your journey with CloudWorld"
              >
                Start Your Journey
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative z-10 w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in-up animation-delay-400">
          <div className="relative">
            {/* Main Image */}
            <img
              src="https://donedigital.au/wp-content/uploads/2023/10/61f8024d4a5157485a2f4596_mls.png"
              alt="Student learning cloud computing with laptop"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />



            {/* Stats Card */}
            {/* <div className="absolute -bottom-3 -right-6 bg-amber-50  rounded-2xl p-4 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm  text-gray-600 font-medium">Placement Support</div>
              </div>
            </div> */}


            <div className="absolute -bottom-3 -right-6 animate-glow bg-amber-50 rounded-2xl p-4 shadow-2xl border border-gray-100 animate-bounce-slow">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">Placement Support</div>
              </div>
            </div>


            {/* <div className="absolute -bottom-3 -right-6 bg-amber-50 rounded-2xl p-4 shadow-2xl border border-gray-100 animate-glow">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">Placement Support</div>
              </div>
            </div> */}


          </div>
        </div>


      </section>
<TestComponent/>
      <CoursesComponent />
      <OurJourney />

      {/* About Section - Enhanced with better layout and image */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6 animate-fade-in-left">
              <h2 className="text-5xl font-bold mb-6 text-primary">About CloudWorld</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in the heart of Pune, India, CloudWorld is more than just a platform—it's a catalyst for transformation. We specialize in bridging the skills gap in IT by offering world-class cloud training, strategic consulting, and unmatched career opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of industry experts is committed to your success, providing personalized guidance that turns aspirations into achievements.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <FaCloud className="mr-2 text-xl" /> {/* Replaced ☁️ */} AWS Certified
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Azure Expertise
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-tertiary/10 text-tertiary rounded-full text-sm font-medium">
                  5+ Years Experience
                </span>
              </div>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
            <div className="lg:order-1 relative animate-fade-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="CloudWorld Innovation"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  Innovating the Cloud Future
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card hover effects */}
      <section className="py-24 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4 text-primary">Our Core Services</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Tailored solutions to propel your IT career and business forward with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCloud className="text-5xl" />, // Replaced ☁️
                title: "Cloud Training",
                desc: "Master AWS, Azure, and Google Cloud through hands-on, certified programs designed for real-world success.",
                color: "from-primary to-secondary"
              },
              {
                icon: <FaTools className="text-5xl" />, // Replaced 🔧
                title: "IT Consulting",
                desc: "Strategic guidance for cloud migration, optimization, and scalable infrastructure that drives efficiency.",
                color: "from-secondary to-tertiary"
              },
              {
                icon: <FaRocket className="text-5xl" />, // Replaced 🚀
                title: "Career Placement",
                desc: "Exclusive access to top IT roles with personalized coaching and a 98% placement success rate.",
                color: "from-tertiary to-quaternary"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 animate-fade-in-up animation-delay-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button className="text-primary font-semibold hover:text-secondary transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - New addition for credibility */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-lg text-secondary">Join thousands who've transformed their careers with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CloudWorld's training was life-changing. Landed my dream job in just 3 months!",
                author: "Priya S., AWS Developer",
                avatar: <FaLaptop className="text-6xl mb-4 opacity-50" /> // Replaced 👩‍💻
              },
              {
                quote: "Exceptional consulting services. Our cloud infrastructure is now 40% more efficient.",
                author: "Rajesh K., CTO at TechCorp",
                avatar: <FaUserTie className="text-6xl mb-4 opacity-50" /> // Replaced 👨‍💼
              },
              {
                quote: "The placement support is unmatched. Highly recommend for IT professionals.",
                author: "Amit M., Cloud Architect",
                avatar: <FaUserMd className="text-6xl mb-4 opacity-50" /> // Replaced 🧑‍🔬
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-light p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {testimonial.avatar}
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced visuals */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1,000+", label: "Trained Professionals" },
              { num: "100+", label: "Partner Companies" },
              { num: "98%", label: "Placement Success" },
              { num: "7+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-5xl font-bold mb-2">{stat.num}</div>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Don't wait for opportunities—create them with CloudWorld. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-light transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us Now
            </a>
            <a
              href="https://cloudworld.co.in/"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              target="_blank" rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
